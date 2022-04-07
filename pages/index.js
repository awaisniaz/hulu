import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utility/request.js'
export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel = "icon" href = "/favicon.ico"></link>
      </Head>
    <Header/>
    <Nav/>
    <Result results={results} />
    </div>
      
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre
  const requests = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTopRated?.url}`).then(res=>res.json())
  return {
    props:{
      results:requests
    }
  }
}
