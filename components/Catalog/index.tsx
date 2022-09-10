import { useState } from 'react'
import cn from 'classnames'
import styles from './Catalog.module.sass'
import List from './List'
import SortingLink from './SortingLink'
import Form from '../Form'

import { characters } from '../../mocks/characters'
import { planets } from '../../mocks/planets'
import { items } from '../../mocks/items'
import { bundles } from '../../mocks/bundles'

type ListProps = {
  className?: string
  value: any[]
}

const Catalog = ({ className, value }: ListProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [search, setSearch] = useState('')

  const handleSubmit = () => alert()

  return (
    <>
      <div className={cn(styles.catalog, className)}>
        <div className={cn(styles.head)}>
          <div className={cn('container', styles.container)}>
            <div className={styles.nav}>
              {value.map((x, index) => (
                <SortingLink
                  item={x}
                  key={index}
                  number={activeIndex}
                  setNumber={setActiveIndex}
                  index={index}
                />
              ))}
            </div>
            <div className={styles.actions}>
              <Form
                className={styles.form}
                value={search}
                setValue={setSearch}
                onSubmit={() => handleSubmit()}
                placeholder="Search character, planet, item..."
                type="text"
                name="search"
                icon="search"
              />
            </div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={cn('container', styles.container)}>
            {
              {
                0: <List items={characters} />,
                1: <List items={planets} />,
                2: <List items={items} />,
                3: <List items={bundles} bigPreview col2 />,
              }[activeIndex]
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
