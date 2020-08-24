import React from 'react';
import styles from '../styles/SearchBar.module.scss';

export default function SearchBar() {
  const validateForm = () => !!document.forms.fsearchbar.fsearch.value;

  return (
    <nav className={styles.searchBar}>
      <form
        name="fsearchbar"
        method="GET"
        action="/items"
        onSubmit={validateForm}
      >
        <input
          type="text"
          name="fsearch"
          placeholder="Nunca dejes de buscar"
        />
      </form>
    </nav>
  );
}
