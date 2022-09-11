import styles from './TabDescription.module.sass'
import cn from 'classnames'
import Icon from '../../../Icon'
import Content from '../../../Content'
import Parameters from '../../../Details/Parameters'
import Stats from '../../../Details/Stats'

import {
  parametersDescription,
  stats,
  property,
} from '../../../../mocks/characterDetails'
import { NFT } from '../../../../types'

type TabProps = {
  asset: NFT
}

const Tab = (props: TabProps) => (
  <div className={styles.tab}>
    <div className={styles.item}>
      <Content className={styles.content}>
        <p>{props.asset.description}</p>
      </Content>
    </div>
    <div className={styles.item}>
      <Parameters
        parameters={[
          {
            label: 'Owned by',
            content: props.asset.tokenAddress,
          },
        ]}
        className={styles.details}
      />
    </div>
    {props.asset.traits.length !== 0 && (
      <div className={styles.grouped}>
        <div className={cn(styles.item)}>
          <div className={styles.category}>Stats</div>
          <Stats items={props.asset.traits} />
        </div>
      </div>
    )}
  </div>
)

export default Tab
