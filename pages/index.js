import Head from 'next/head';
import Plp from './plp';
import AppBar from '../components/appBar.js';
import GlobalState from "../context/GlobalState.js";

export default function Home() {
  return (
    <GlobalState>
      <Head>
        <title>Homepage con listing prodotti</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <header>
        <AppBar />
      </header>
      <main>
        <Plp />
      </main>
      <footer />
    </GlobalState>
  )
}
