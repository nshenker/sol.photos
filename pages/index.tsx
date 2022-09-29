import type { NextPage } from 'next'
import Layout from '../components/Layout'
import PageProfile from '../components/PageUserProfile'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [domain, setDomain] = useState<string>('shanksy.sol')
  useEffect(() => {
    const hostname = window.location.hostname
    if (hostname === 'shanksy.sol') {
      setDomain('')
    }
  }, [])

  return (
    <Layout>
      <PageProfile domain={domain} />
    </Layout>
  )
}

export default Home
