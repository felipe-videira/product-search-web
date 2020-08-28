import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProductPreview.module.scss';
import { CURRENCIES_SYMBOLS } from '../contants';

const formatPrice = ({ currency, amount, decimals }) => `${CURRENCIES_SYMBOLS[currency]} ${amount},${decimals * 100}`;

const FreeShippingIcon = (
  <img
    className={styles.freeShippingIcon}
    src="/assets/images/truck.svg"
    width="25"
    height="25"
    alt="Flete gratis"
  />
);

function ProductPreview({
  title,
  price,
  picture,
  free_shipping,
  city_name,
}) {
  return (
    <div className={styles.productPreview}>
      <img
        className={styles.productPreviewPic}
        src={picture}
        width="250"
        height="250"
        alt="Foto"
      />
      <div className={styles.productPreviewInfo}>
        <span className={styles.productPreviewPrice}>
          {formatPrice(price)}
          {' '}
          {free_shipping && FreeShippingIcon}
        </span>
        <h2 className={styles.productPreviewTitle}>{title}</h2>
      </div>
      <p className={styles.productPreviewCity}>{city_name}</p>
    </div>
  );
}

ProductPreview.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    decimals: PropTypes.number.isRequired,
  }).isRequired,
  picture: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool.isRequired,
  city_name: PropTypes.string.isRequired,
};

export default ProductPreview;
