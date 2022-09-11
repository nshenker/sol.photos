import styles from './Stats.module.sass'
import cn from 'classnames'

import { Trait } from '../../../types'

type StatsProps = {
  className?: string
  items: Trait[]
}

const Stats = ({ className, items }: StatsProps) => (
  <div className={cn(styles.stats, className)}>
    {items.map(
      (item, index) =>
        item.type !== 'background' && (
          <div className={styles.item} key={index}>
            <div className={styles.details}>
              <div className={styles.title}>{item.type}</div>
              {item.value && <div className={styles.content}>{item.value}</div>}
            </div>
          </div>
        )
    )}
  </div>
)

export default Stats
