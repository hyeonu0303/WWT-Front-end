import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head';
import 'styles/style.css';
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    axios.get('http://bgung.iptime.org:7777/data').then((res: any) => {
      const response = res.data.trend_rank;
      const parsedData: Array<any> = [];
      Object.keys(response).forEach((key) => {
        parsedData.push(response[key])
      })
      setData(parsedData)
    })
  }, []);

  // useEffect(async () => {
  //   try {
  //     const response = await axios.get('https://worldtimeapi.org/api/ip');
  //   }
  //   catch (e) {
  //     console.error(e);
  //   }
  // },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>WWT</title>
        <meta name="description" content="World-Wide-Trends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{t('common:title')}</h1>
      {data.map((keyword: string, i) => {
        return (
          <h1 key={keyword}>
            {i + 1}위: {keyword}
          </h1>
        )
      })}
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
