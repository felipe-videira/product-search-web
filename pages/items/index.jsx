import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Head';
import styles from '../../styles/Items.module.scss';
import SearchBar from '../../components/SearchBar';
import request from '../../services/request';
import Categories from '../../components/Categories';
import ProductPreview from '../../components/ProductPreview';

function Items({ search, items, categories }) {
  return (
    <div className={styles.container}>
      <Head />
      <SearchBar value={search} />

      <main className={styles.main}>
        <Categories value={categories} />

        <div className={styles.content}>
          {items.map((item) => (
            <ProductPreview
              title={item.title}
              price={item.price}
              picture={item.picture}
              free_shipping={item.free_shipping}
              city_name={item.city_name}
            />
          ))}
        </div>

      </main>
    </div>
  );
}

Items.propTypes = {
  search: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export async function getServerSideProps(context) {
  const { search } = context.query;

  const { items, categories } = await request('/items', 'GET', { q: search });

  return {
    props: {
      search,
      items,
      categories,
    },
  };
}

export default Items;
