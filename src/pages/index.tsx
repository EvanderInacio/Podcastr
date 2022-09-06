import { GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { api } from '../services/api'
import { convertDurationToTimeString } from '../utils/convertDurationToTimeSting'

import styles from './home.module.scss'

type Episode = {
  id: string
  title: string
  thumbnail: string
  description: string
  duration: number
  members: string
  durationAsString: string
  url: string
  publishedAt: string
}

type HomeProps = {
  episodes: Episode[]
}
 
 
export default function Home(props: HomeProps) {


  
  return (
    <div className={styles.homepage}>

    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    }
  })

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      description: episode.description,
      url: episode.file.url,
    }
  })

  return {
    props: {
      episodes,
    },
    revalidate: 60 * 60 * 8 // A cada 8 horas, quando alguém acessar essa pagina ele ira fazer uma nova chamada a API 
  }
}
