import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from '../../components/Head';
import styles from '../../styles/ItemDetails.module.scss';
import SearchBar from '../../components/SearchBar';
import request from '../../services/request';
import { CONDITIONS } from '../../contants';
import { formatPrice } from '../../utils';
import Categories from '../../components/Categories';

function ItemDetails({ item, categories }) {
  const router = useRouter();

  const status = useMemo(() => {
    return `${CONDITIONS[item.condition]} - ${item.sold_quantity} vendidos`;
  }, [
    item.condition,
    item.sold_quantity,
  ]);

  const price = useMemo(() => {
    const { currency, amount } = item.price;
    return formatPrice(currency, amount, 0);
  }, [
    item.price.currency,
    item.price.amount,
  ]);

  const decimals = useMemo(() => {
    return (item.price.decimals * 100).toString().padStart(2, '0');
  }, [item.price.decimals]);

  useEffect(() => {
    if (!item.id) {
      router.push('/');
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head />
      <SearchBar />

      <main className={styles.main}>
        <Categories value={categories} />

        <div className={styles.content}>
          <div className={styles.itemDetails}>

            <div
              className={styles.itemDetailsPic}
              style={{ backgroundImage: `url(${item.picture})` }}
            />

            <div className={styles.itemDetailsInfo}>
              <p className={styles.itemDetailsInfoStatus}>
                {status}
              </p>
              <h1>{item.title}</h1>
              <p
                data-end={decimals}
                className={styles.itemDetailsInfoPrice}
              >
                {price}
              </p>
              <button type="button">Comprar</button>
            </div>

            <div className={styles.itemDetailsDesc}>
              <h2>Descripción del producto</h2>
              <p>{item.description}</p>
            </div>

          </div>
        </div>
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
  }),
  categories: PropTypes.arrayOf(PropTypes.string),
};

ItemDetails.defaultProps = {
  item: { price: {} },
  categories: [],
};

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;

    const { item, categories } = await request(`/items/${id}`, 'GET');

    return {
      props: {
        item,
        categories,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
}

export default ItemDetails;
