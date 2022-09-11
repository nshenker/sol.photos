import styles from './List.module.sass'
import cn from 'classnames'
import Card from '../../Card'
import Loader from '../../Loader'

import { NFT } from '../../../types'

type ListProps = {
  className?: string
  items: NFT[]
  loading: boolean
  nextPage: () => void
  allPagesFetched: boolean
  setViewDetailFor: (nft: NFT) => void
}

const List = ({
  className,
  items,
  loading,
  nextPage,
  allPagesFetched,
  setViewDetailFor,
}: ListProps) => {
  return (
    <>
      <div className={cn(styles.list, className)}>
        {items.map((x, index) => (
          <Card
            className={styles.card}
            item={x}
            key={index + Date.now()}
            setViewDetailFor={setViewDetailFor}
          />
        ))}
      </div>

      {!allPagesFetched && (
        <div className={styles.btns}>
          <button
            className={cn('button-stroke', styles.button)}
            disabled={loading}
            onClick={nextPage}
          >
            {loading && <Loader className={styles.loader} />}
            {loading ? 'Loading' : 'Load more'}
          </button>
        </div>
      )}
    </>
  )
}

export default List
