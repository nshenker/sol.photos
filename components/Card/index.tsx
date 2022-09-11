import Link from 'next/link'
import cn from 'classnames'
import styles from './Card.module.sass'
import Image from '../Image'
import Icon from '../Icon'

import { numberWithCommas } from '../../utils'
import { NFT } from '../../types'

type CardProps = {
  className?: string
  item: NFT
  bigPreview?: boolean
}

type LoaderProps = {
  src: string
  width: number
  quality?: number
}

const nftImageLoader = ({ src, width, quality }: LoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Card = ({ className, item, bigPreview }: CardProps) => {
  return (
    <div className={cn(styles.card, className)}>
      <div
        className={cn(styles.preview, {
          [styles.preview_big]: bigPreview,
        })}
        style={{ backgroundColor: '#EBE3D9' }}
      >
        <div className={styles.image}>
          <Image
            loader={nftImageLoader}
            src={item.image}
            width={372}
            height={372}
            alt={item.name}
          />
        </div>
        <div className={styles.details}>
          <Link href="">
            <a
              className={cn(
                'button-stroke',
                styles.button,
                styles.buttonDetails
              )}
            >
              View detail
            </a>
          </Link>
        </div>
      </div>
      <div className={cn('details_bottom', styles.details_bottom)}>
        <div className={styles.stat}>
          <div className={styles.crypto}>{item.name}</div>
          <div className={cn('label-purple')}>{item.collection}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
