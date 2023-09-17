import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { Resume } from '@/components/Resume/Resume'
import { Experience } from '@/components/Experience/Experience'

const Home: NextPage = () => {
  return (
    <Layout>
      <Resume />
      <Experience />
    </Layout>
  )
}

export default Home
