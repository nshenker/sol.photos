import { useEffect, useState } from 'react'
import { getDomainKey } from '@bonfida/spl-name-service'
import cn from 'classnames'

import Main from './Main'
import Catalog from '../Catalog'
import styles from './PageUserProfile.module.sass'
import axios from 'axios'
import { NFT, Trait, Transaction } from '../../types'

type UserProfileProps = {
  domain: string
}

const UserProfile = (props: UserProfileProps) => {
  const [address, setAddress] = useState<string>('')
  const [assets, setAssets] = useState<NFT[]>([])

  useEffect(() => {
    ;(async () => {
      const { pubkey } = await getDomainKey(props.domain)

      const addr = pubkey.toBase58()
      setAddress(addr)

      axios
        .post(`/api/nfts?address=8eekKfUAGSJbq3CdA2TmHb8tKuyzd5gtEas3MYAtXzrT`)
        .then((response) => {
          const assets = response.data.result.assets

          setAssets(
            assets.map(
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
            )
          )
        })
    })()
  }, [props.domain])

  return (
    <div className={cn('section-main', styles.section)}>
      <Main domain={props.domain} address={address} />
      <Catalog assets={assets} className={styles.catalog} />
    </div>
  )
}

export default UserProfile
