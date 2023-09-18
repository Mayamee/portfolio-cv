import { ConfigService } from '@/services/ConfigService'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { TechnologyStackStore } from 'stores/TechnologyStackStore'

const { authorData } = ConfigService.config

const StackItems = authorData.skills.map((skill) => ({
  content: skill,
  isActive: false,
}))

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TechnologyStackStore.loadStackList(StackItems)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
