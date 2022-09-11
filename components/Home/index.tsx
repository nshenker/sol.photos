import cn from 'classnames'
import styles from './Home.module.sass'
import Image from '../Image'

const Home = () => (
  <div className={styles.main}>
    <div className="container">
      <div>
        <h1 className={cn('h1', styles.title)}>
          <span className={styles.domain}>bonfida.sol</span>
          <span className={styles.highlight}>.photos</span>
        </h1>
        <div className={cn('h6', styles.info)}>
          Your entire NFT portfolio, in one simple link.
        </div>
        <button
          className={cn('button', styles.button)}
          onClick={() => window.open('https://onybose.sol.photos', '_blank')}
        >
          See example
        </button>
      </div>
      <div className={styles.preview}>
        <Image
          src="/images/content/run.png"
          width={972}
          height={600}
          alt="Run"
        />
      </div>
    </div>
  </div>
)

export default Home
