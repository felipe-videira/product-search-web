import React from 'react';
import Head from '../components/Head';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <SearchBar />
    </div>
  );
}
