import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Categories.module.scss';

function Categories({ value }) {
  return (
    <ul className={styles.categories}>
      {value.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

Categories.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
};

Categories.defaultProps = {
  value: '',
};

export default Categories;
