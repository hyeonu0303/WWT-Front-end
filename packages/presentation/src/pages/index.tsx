import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Container from '@mui/material/Container'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const [data, setData] = useState<string[]>([])

  useEffect(() => {
    axios.get('http://34.83.6.33:80/data').then((res: any) => {
      const response = res.data.trend_rank
      const parsedData: Array<any> = []
      Object.keys(response).forEach((key) => {
        parsedData.push(response[key])
      })
      setData(parsedData)
    })
  }, [])

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: 'center' }}>World Wide Trends</h1>
        {/* <h1>{t('common:title')}</h1> */}
        {data.map((keyword: string, i) => {
          return (
            <h1 key={keyword}>
              {i + 1}위:{' '}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/search?q=${keyword}`}
              >
                {keyword}
              </a>
            </h1>
          )
        })}
      </Container>
      <footer></footer>
    </div>
  )
}

export default Home
