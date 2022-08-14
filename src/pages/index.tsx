import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router';
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  const router = Router;
  router.push("/auth");
  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
