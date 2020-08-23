import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Items.module.scss';

export default function Items() {
  const router = useRouter();
  const { search } = router.query;

  return (
    <div className={styles.container}>
      <Head>
        <title>Mercado Libre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
          {`Me gusta pantalones com la busca ${search}`}
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
