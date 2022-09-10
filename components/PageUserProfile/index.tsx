import { useEffect, useState } from 'react'
import { getDomainKey } from '@bonfida/spl-name-service'
import cn from 'classnames'

import Main from './Main'
import Catalog from '../Catalog'
import styles from './PageUserProfile.module.sass'
import { sortingMarket } from '../../mocks/sortingCatalog'
import axios from 'axios'

type UserProfileProps = {
  domain: string
}

const UserProfile = (props: UserProfileProps) => {
  const [address, setAddress] = useState<string>('')
  const [nfts, setNfts] = useState()

  useEffect(() => {
    ;(async () => {
      const { pubkey } = await getDomainKey(props.domain)

      const addr = pubkey.toBase58()
      setAddress(addr)

      axios
        .post(`/api/nfts?address=8eekKfUAGSJbq3CdA2TmHb8tKuyzd5gtEas3MYAtXzrT`)
        .then((response) => {
          setNfts(response.data)
        })
    })()
  }, [props.domain])

  console.log(nfts)

  return (
    <div className={cn('section-main', styles.section)}>
      <Main domain={props.domain} address={address} />
      <Catalog value={sortingMarket} className={styles.catalog} />
    </div>
  )
}

export default UserProfile
