import { useEffect, useMemo, useState } from 'react'
import { getDomainKey, NameRegistryState } from '@bonfida/spl-name-service'
import { Connection } from '@solana/web3.js'
import cn from 'classnames'
import axios from 'axios'

import Main from './Main'
import Catalog from '../Catalog'
import styles from './PageUserProfile.module.sass'
import { NFT, Trait, Transaction } from '../../types'
import Home from '../Home'
import CardDetails from '../PageCharacterDetails/CardDetails'

type UserProfileProps = {
  domain: string
}

type AssetsType = {
  [page: number]: NFT[]
}

const UserProfile = (props: UserProfileProps) => {
  const [address, setAddress] = useState<string>('')
  const [assets, setAssets] = useState<AssetsType>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [allPagesFetched, setAllPagesFetched] = useState<boolean>(false)
  const [viewDetailFor, setViewDetailFor] = useState<NFT | undefined>(undefined)

  const connection = useMemo(() => {
    return new Connection('https://api.mainnet-beta.solana.com')
  }, [])

  useEffect(() => {
    ;(async () => {
      if (!props.domain) {
        return
      }

      if (assets[page] !== undefined) {
        return
      }

      setLoading(true)

      const { pubkey } = await getDomainKey(props.domain)
      const {
        registry: { owner: wallet },
      } = await NameRegistryState.retrieve(connection, pubkey)

      const addr = wallet.toBase58()
      setAddress(addr)

      axios.post(`/api/nfts?address=${addr}&page=${page}`).then((response) => {
        const rawAssets = response.data.result.assets
        if (response.data.result.totalPages === page) {
          setAllPagesFetched(true)
        }

        setAssets({
          [page]: rawAssets.map(
            (asset: any) =>
              ({
                name: asset.name,
                description: asset.description,
                collection: asset.collectionName,
                image: asset.imageUrl,
                traits: asset.traits.map(
                  (trait: any) =>
                    ({
                      type: trait.trait_type,
                      value: trait.value,
                    } as Trait)
                ),
                provenance: asset.provenance.map(
                  (txn: any) =>
                    ({
                      date: txn.date,
                      blockNumber: txn.blockNumber,
                      hash: txn.txHash,
                    } as Transaction)
                ),
                tokenAddress: asset.tokenAddress,
              } as NFT)
          ),
        })

        setLoading(false)
      })
    })()
  }, [assets, connection, page, props.domain])

  // NextJS will optimise this block by not trying to render
  // server-side.
  if (typeof window !== 'undefined') {
    if (window.location.hostname === 'sol.photos') {
      return (
        <div className={cn('section-main', styles.section)}>
          <Home />
        </div>
      )
    }
  }

  if (viewDetailFor) {
    return (
      <CardDetails
        asset={viewDetailFor}
        onClose={() => setViewDetailFor(undefined)}
      />
    )
  }

  return (
    <div className={cn('section-main', styles.section)}>
      <Main domain={props.domain} address={address} />
      <Catalog
        assets={([] as NFT[]).concat(...Object.values(assets))}
        className={styles.catalog}
        loading={loading}
        nextPage={() => setPage(page + 1)}
        allPagesFetched={allPagesFetched}
        setViewDetailFor={setViewDetailFor}
      />
    </div>
  )
}

export default UserProfile
