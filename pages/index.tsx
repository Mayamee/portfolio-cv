import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { Resume } from '@/components/Resume/Resume'
import { Experience } from '@/components/Experience/Experience'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Frontend Developer Resume | Belykh DN</title>
      </Head>
      <Resume />
      <Experience />
    </Layout>
  )
}

export default Home
