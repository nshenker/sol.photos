import styles from './List.module.sass'
import cn from 'classnames'
import Card from '../../Card'
import Loader from '../../Loader'

import { NFT } from '../../../types'

type ListProps = {
  className?: string
  items: NFT[]
  loading: boolean
}

const List = ({ className, items, loading }: ListProps) => {
  return (
    <>
      <div className={cn(styles.list, className)}>
        {items.map((x, index) => (
          <Card className={styles.card} item={x} key={index + Date.now()} />
        ))}
      </div>
      <div className={styles.btns}>
        <button
          className={cn('button-stroke', styles.button)}
          disabled={loading}
        >
          {loading && <Loader className={styles.loader} />}
          {loading ? 'Loading' : 'Load more'}
        </button>
      </div>
    </>
  )
}

export default List
