import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Head';
import styles from '../../styles/Items.module.scss';

function Items({ search }) {
  return (
    <div className={styles.container}>
      <Head />
      <main className={styles.main}>

        <p className={styles.description}>
          {`Me gusta pantalones com la busca ${search}`}
        </p>

      </main>
    </div>
  );
}

Items.propTypes = {
  search: PropTypes.string,
};

Items.defaultProps = {
  search: null,
};

export async function getServerSideProps(context) {
  const { search } = context.query;

  return {
    props: {
      search,
    },
  };
}

export default Items;
