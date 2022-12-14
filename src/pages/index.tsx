import { Login } from 'components';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Login />
    </div>
  )
}

export default Home
