import MainLayout from '@/src/layout/MainLayout'
import '@/styles/globals.css'
import '@/styles/swiper.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
