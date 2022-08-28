// 모든 페이지의 공통 요소
import '../styles/style.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { HeaderLayout } from 'layouts'
import { Header } from 'containers'

const GlobalApp = ({ Component, pageProps }: AppProps) => {
  return (
    <HeaderLayout headerElement={<Header />}>
      <Head>
        <title>World Wide Trends</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </HeaderLayout>
  )
}

export default GlobalApp
