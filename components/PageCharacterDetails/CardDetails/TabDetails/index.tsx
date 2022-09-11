import styles from './TabDetails.module.sass'
import cn from 'classnames'
import Parameters from '../../../Details/Parameters'
import Views from '../../../Details/Views'

import {
  parametersDetails,
  viewLinks,
} from '../../../../mocks/characterDetails'
import { NFT } from '../../../../types'

type TabProps = {
  asset: NFT
}

const Tab = (props: TabProps) => (
  <div className={styles.tab}>
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
    <div className={styles.item}>
      <Views
        links={[
          {
            title: 'View on explorer',
            url: `https://solscan.io/account/${props.asset.tokenAddress}`,
            image: '/images/solscan-logo.png',
          },
        ]}
      />
    </div>
  </div>
)

export default Tab
