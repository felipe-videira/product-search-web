import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Head';
import styles from '../../styles/ItemDetails.module.scss';
import SearchBar from '../../components/SearchBar';
import request from '../../services/request';

function ItemDetails({ item }) {
  return (
    <div className={styles.container}>
      <Head />
      <SearchBar />

      <main className={styles.main}>

        <p>{item.title}</p>

      </main>

    </div>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.number.isRequired,
    }).isRequired,
    picture: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    sold_quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const { item } = await request(`/items/${id}`, 'GET');

  return {
    props: {
      item,
    },
  };
}

export default ItemDetails;
