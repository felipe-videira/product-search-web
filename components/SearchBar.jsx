import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBar.module.scss';

function SearchBar({ initialValue }) {
  const [search, setSearch] = useState(initialValue);

  const onChange = useCallback((evt) => {
    setSearch(evt.target.value);
  }, []);

  const onSubmit = useCallback(() => !!search, [search]);

  return (
    <nav className={styles.searchBar}>
      <a href="/">
        <img
          src="/assets/images/logo.png"
          width="75"
          height="50"
          alt="Mercado Libre"
        />
      </a>
      <form
        name="searchBar"
        method="GET"
        action="/items"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="search"
          value={search}
          onChange={onChange}
          placeholder="Nunca dejes de buscar"
        />
        <button type="submit">
          <img
            src="/assets/images/search.svg"
            width="20"
            height="20"
            alt="Busca"
          />
        </button>
      </form>
    </nav>
  );
}

SearchBar.propTypes = {
  initialValue: PropTypes.string,
};

SearchBar.defaultProps = {
  initialValue: null,
};

export default SearchBar;
