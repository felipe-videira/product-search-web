import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/ProductPreview.module.scss';
import { ENTER_KEY } from '../contants';
import { formatPrice } from '../utils';

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
  onClick,
}) {
  const formattedPrice = useMemo(() => {
    return formatPrice(price.currency, price.amount, price.decimals);
  }, [price]);

  const onKeyPress = useCallback((evt) => {
    if (evt.key === ENTER_KEY) {
      onClick();
    }
  }, [onClick]);

  return (
    <div
      className={styles.productPreview}
      onClick={onClick}
      onKeyPress={onKeyPress}
      tabIndex="0"
      role="link"
    >
      <div
        className={styles.productPreviewPic}
        style={{ backgroundImage: `url(${picture})` }}
      />
      <div className={styles.productPreviewInfo}>
        <div className={styles.productPreviewInfoPrice}>
          <span>{formattedPrice}</span>
          {free_shipping && FreeShippingIcon}
        </div>
        <h2 className={styles.productPreviewInfoTitle}>{title}</h2>
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
  onClick: PropTypes.func.isRequired,
};

export default ProductPreview;
