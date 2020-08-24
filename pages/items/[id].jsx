import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Head';
import styles from '../../styles/ItemDetails.module.scss';

function ItemDetails({ id }) {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>

        <p className={styles.description}>
          {`Me gusta pantalones com el ID ${id}`}
        </p>

      </main>

    </div>
  );
}

ItemDetails.propTypes = {
  id: PropTypes.string,
};

ItemDetails.defaultProps = {
  id: null,
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  return {
    props: {
      id,
    },
  };
}

export default ItemDetails;
