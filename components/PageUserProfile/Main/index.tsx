import { useState, useEffect, useMemo } from 'react'
import cn from 'classnames'
import Tooltip from 'rc-tooltip'
import { getTwitterRecord, getUrlRecord } from '@bonfida/spl-name-service'
import { Connection } from '@solana/web3.js'
import axios from 'axios'
import makeBlockie from 'ethereum-blockies-base64'

import styles from './Main.module.sass'
import Cover from '../../Profile/Cover'
import Icon from '../../Icon'
import Image from '../../Image'

import { formatWalletAddress } from '../../../utils'

type MainProps = {
  domain: string
  address: string
}

const Main = (props: MainProps) => {
  const { domain, address } = props

  const [twitterRecord, setTwitterRecord] = useState<string>('')
  const [urlRecord, setUrlRecord] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [profileUrl, setProfileUrl] = useState<string>('')

  const connection = useMemo(() => {
    return new Connection('https://api.mainnet-beta.solana.com')
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await getTwitterRecord(connection, domain)
        const handle = data?.toString('utf-8') ?? ''
        setTwitterRecord(handle)

        if (handle) {
          const { data: twitterFields } = await axios.get(
            `/api/twitter?handle=${handle}`
          )
          setName(twitterFields.name)
          setProfileUrl(twitterFields.profile_image.replace('_normal', ''))
        }
      } catch {}

      try {
        const { data } = await getUrlRecord(connection, domain)
        setUrlRecord(data?.toString('utf-8') ?? '')
      } catch {}
    })()
  }, [connection, domain])

  return (
    <div className={cn('container-lg', styles.container)}>
      <div className={styles.wrapper}>
        <Cover cover="/images/content/profile-cover.png" />
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image
              src={
                profileUrl ||
                (address && makeBlockie(address)) ||
                '/images/content/gray.jpeg'
              }
              width={142}
              height={142}
              alt={domain}
            />
          </div>
          <div className={styles.details}>
            <div className={cn('h5', styles.name)}>{name || domain}</div>
            <div className={styles.code}>
              <div>
                {address && formatWalletAddress(address, 7, 5)}
                {twitterRecord}
              </div>
              <Tooltip overlay="Copy address">
                <button className={styles.copy}>
                  <Icon name="copy" size="20" />
                </button>
              </Tooltip>
            </div>
          </div>

          <div className={styles.share}>
            {twitterRecord && (
              <button
                className={cn('button-stroke button-sm', styles.btn)}
                onClick={() =>
                  window.open(`https://twitter.com/${twitterRecord}`, '_blank')
                }
              >
                <Icon name="twitter" size="16" />
                Twitter
              </button>
            )}

            {urlRecord && (
              <button
                className={cn('button-stroke button-sm', styles.btn)}
                onClick={() => window.open(urlRecord, '_blank')}
              >
                <Icon name="link" size="16" />
                Website
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
