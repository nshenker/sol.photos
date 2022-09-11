import { useEffect, useMemo, useState } from 'react'
import { getDomainKey, NameRegistryState } from '@bonfida/spl-name-service'
import { Connection } from '@solana/web3.js'
import cn from 'classnames'
import axios from 'axios'

import Main from './Main'
import Catalog from '../Catalog'
import styles from './PageUserProfile.module.sass'
import { NFT, Trait, Transaction } from '../../types'

type UserProfileProps = {
  domain: string
}

const UserProfile = (props: UserProfileProps) => {
  const [address, setAddress] = useState<string>('')
  const [assets, setAssets] = useState<NFT[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [allPagesFetched, setAllPagesFetched] = useState<boolean>(false)

  const connection = useMemo(() => {
    return new Connection('https://api.mainnet-beta.solana.com')
  }, [])

  useEffect(() => {
    ;(async () => {
      if (!props.domain) {
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

        setAssets([
          ...assets,
          ...rawAssets.map(
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
              } as NFT)
          ),
        ])

        setLoading(false)
      })
    })()
  }, [connection, page, props.domain])

  return (
    <div className={cn('section-main', styles.section)}>
      <Main domain={props.domain} address={address} />
      <Catalog
        assets={assets}
        className={styles.catalog}
        loading={loading}
        nextPage={() => setPage(page + 1)}
        allPagesFetched={allPagesFetched}
      />
    </div>
  )
}

export default UserProfile
