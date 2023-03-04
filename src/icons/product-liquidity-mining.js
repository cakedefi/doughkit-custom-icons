import React from 'react';
import PropTypes from 'prop-types';

const ProductLiquidityMining = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <rect width="24" height="24" rx="8"></rect>
      <circle cx="12" cy="12" r="7"></circle>
      <circle cx="12" cy="12" r="4"></circle>
    </svg>
  );
};

ProductLiquidityMining.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductLiquidityMining.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProductLiquidityMining;
