import { useState } from 'react'
import styles from './CardDetails.module.sass'
import cn from 'classnames'

import Preview from '../../Details/Preview'
import Description from '../../Details/Description'
import TabDescription from './TabDescription'
import TabDetails from './TabDetails'
import { NFT } from '../../../types'

const navigation: Array<string> = ['Description', 'Details']

type CardDetailsProps = {
  asset: NFT
  onClose: () => void
}

const CardDetails = (props: CardDetailsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const { asset, onClose } = props

  return (
    <div className={cn('section-main', styles.section)}>
      <div className={cn('container-xl', styles.container)}>
        <div className={styles.row}>
          <Preview
            className={styles.preview}
            image={asset.image}
            onClose={onClose}
          />
          <div className={styles.wrap}>
            <Description
              className={styles.description}
              title={asset.name}
              code={asset.collection}
            />

            <div className={styles.nav}>
              {navigation.map((link, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {link}
                </button>
              ))}
            </div>
            <div className={styles.group}>
              {activeIndex === 0 && <TabDescription asset={asset} />}
              {activeIndex === 1 && <TabDetails asset={asset} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
