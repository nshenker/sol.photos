import cn from 'classnames'

import styles from './Catalog.module.sass'
import List from './List'
import { NFT } from '../../types'

type ListProps = {
  className?: string
  assets: NFT[]
  loading: boolean
  nextPage: () => void
  allPagesFetched: boolean
}

const Catalog = ({
  className,
  assets,
  loading,
  nextPage,
  allPagesFetched,
}: ListProps) => {
  return (
    <div className={cn(styles.catalog, className)}>
      <div className={cn(styles.head)} />
      <div className={styles.body}>
        <div className={cn('container', styles.container)}>
          <List
            items={assets}
            loading={loading}
            nextPage={nextPage}
            allPagesFetched={allPagesFetched}
          />
        </div>
      </div>
    </div>
  )
}

export default Catalog
