import { useEffect, useState } from 'react'
import { getDomainKey } from '@bonfida/spl-name-service'
import cn from 'classnames'

import Main from './Main'
import Catalog from '../Catalog'
import styles from './PageUserProfile.module.sass'
import { sortingMarket } from '../../mocks/sortingCatalog'

type UserProfileProps = {
  domain: string
}

const UserProfile = (props: UserProfileProps) => {
  const [address, setAddress] = useState<string>('')
  useEffect(() => {
    ;(async () => {
      const { pubkey } = await getDomainKey(props.domain)
      setAddress(pubkey.toBase58())
    })()
  }, [props.domain])

  return (
    <div className={cn('section-main', styles.section)}>
      <Main domain={props.domain} address={address} />
      <Catalog value={sortingMarket} className={styles.catalog} />
    </div>
  )
}

export default UserProfile
