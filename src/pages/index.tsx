


export default function Home(props) {
  return (
    <img src="/index.png" alt="" />
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8 // A cada 8 horas, quando alguém acessar essa pagina ele ira fazer uma nova chamada a API 
  }
}
