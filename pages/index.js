import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harsh Prasad</title>
        <meta name="description" content="Hey, It&apos;s Harsh Prasad" />
        <link rel="icon" href="https://i.ibb.co/wJFtM4b/Adobe-Express-20220523-1247000-007802388242735714.png" />
      </Head>

      <Image
    alt="Background Image"
    src="https://i.ibb.co/sCLgdBd/20220521-234530.gif"
    layout="fill"
    
    className={styles.bgimg}
/>   
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey There! <a href="">It&apos;s Harsh Prasad!</a>
        </h1>

        <p className={styles.description}>
          <Link href="/skills"><a className={styles.code}>My Skills</a></Link>
        </p>

      </main>

    </div>
  )
}
