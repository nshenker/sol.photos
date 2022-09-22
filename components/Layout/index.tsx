import cn from 'classnames'
import styles from './Layout.module.sass'
import Head from 'next/head'
import Header from '../Header'
import Footer from '../Footer'

type LayoutProps = {
  hideHeader?: boolean
  hideFooter?: boolean
  children: React.ReactNode
  gray?: boolean
}

const Layout = ({ hideHeader, hideFooter, children, gray }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>sol.photos</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/metadata/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/metadata/apple-touch-icon.png"
        />
        <link
          rel="mask-icon"
          href="/metadata/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/metadata/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/metadata/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/metadata/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/metadata/android-chrome-512x512.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/metadata/mstile-150x150.png"
        ></meta>
        <link rel="manifest" href="/metadata/site.webmanifest" />
        <meta
          name="sol.photos"
          content="Turn your .sol domain into an NFT gallery"
        />
        {/* Twitter Card data */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ui8" />
        <meta
          name="twitter:title"
          content="sol.photos"
        />
        <meta
          name="twitter:description"
          content="Turn your .sol domain into an NFT gallery"
        />
        <meta name="twitter:creator" content="@onybose" />
        <meta name="twitter:image" content="/metadata/twitter.png" />
        <meta
          property="og:title"
          content="sol.photos"
        />
      </Head>
      <div className={cn(styles.layout, { [styles.gray]: gray })}>
        {!hideHeader && <Header />}
        <div className={styles.inner}>{children}</div>
        {!hideFooter && <Footer />}
      </div>
    </>
  )
}

export default Layout
