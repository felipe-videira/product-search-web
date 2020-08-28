import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBar.module.scss';

function SearchBar({ value }) {
  const getForm = () => document.forms.searchBar;

  const validateForm = () => !!getForm().search.value;

  const initValues = () => {
    getForm().search.setAttribute('value', value);
  };

  useEffect(() => {
    initValues();
  }, []);

  return (
    <nav className={styles.searchBar}>
      <img
        src="/assets/images/logo.png"
        width="75"
        height="50"
        alt="Mercado Libre"
      />
      <form
        name="searchBar"
        method="GET"
        action="/items"
        onSubmit={validateForm}
      >
        <input
          type="text"
          name="search"
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
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  value: '',
};

export default SearchBar;
