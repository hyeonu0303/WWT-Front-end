import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Container from '@mui/material/Container'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useTheme } from '@emotion/react'

interface HistoryRank {
  keyword: string
  link: string
  rank: number
}

const Home: NextPage = () => {
  const [data, setData] = useState<HistoryRank[]>([])
	const theme = useTheme();

  useEffect(() => {
    const nowDate = new Date()
    nowDate.setHours(0, 0, 0, 0)

    axios
      .get(
        `http://34.83.6.33/historycalRank/${
          nowDate.getTime() / 1000 - 60 * 60 * 24
        }/KR`,
      )
      .then((res: any) => {
        if (res.data) {
          setData(res.data)
        }
      })
  }, [])

  return (
    <div>
      <Container>
        {/* <h1 style={{ textAlign: 'center' }}>World Wide Trends</h1> */}
        <br></br>
        <br></br>
        <br></br>
        {data.map(({ rank, keyword, link }) => {
          return (
            <Card
              style={rank % 2 ? { boxShadow: theme.shadows[2] } : { marginLeft: 'auto', boxShadow: theme.shadows[2] }}
              key={rank}
              sx={{ maxWidth: 450 }}
            >
              <a
                style={{ textDecoration: 'none' }}
                target="blank"
                href={`https://www.google.com/search?q=${keyword}`}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={
                    'https://t0.gstatic.com/images?q=tbn:ANd9GcS9IKEisplXM_gy9w7mgc69jVRwJDIozusO2fxP1R8MUKy6ZkXAZRBfnGBJnPmKwiTcDxZmVk2q'
                  }
                ></CardMedia>
              </a>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {rank}. {keyword}
                </Typography>
                <CardActions>
                  <a
                    style={{ textDecoration: 'none' }}
                    target="blank"
                    href={link}
                  >
                    <Button variant="contained">View in Google Trends</Button>
                  </a>
                  <a
                    style={{ textDecoration: 'none' }}
                    target="blank"
                    href={`https://www.google.com/search?q=${keyword}`}
                  >
                    <Button variant="outlined">Search on Google</Button>
                  </a>
                </CardActions>
              </CardContent>
            </Card>
          )
        })}
      </Container>
      <footer></footer>
    </div>
  )
}

export default Home
