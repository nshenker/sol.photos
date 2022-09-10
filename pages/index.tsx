import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageProfile from '../components/PageUserProfile'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [domain, setDomain] = useState<string>('')
  useEffect(() => {
    const hostname = window.location.hostname
    if (hostname === 'sol.photos') {
      setDomain('')
    } else if (hostname.endsWith('.sol.photos')) {
      setDomain(hostname.replace('.photos', ''))
    } else {
      setDomain('onybose.sol')
    }
  }, [])

  return (
    <Layout>
      <PageProfile domain={domain} />
    </Layout>
  )
}

export default Home
