import React from 'react';
import PropTypes from 'prop-types';

const ProductStaking = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 11a1 1 0 100 2h12a1 1 0 100-2H6zm2 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm4 2a1 1 0 100 2 1 1 0 000-2zM11 6a1 1 0 112 0 1 1 0 01-2 0zM9 8a1 1 0 100 2h6a1 1 0 100-2H9z"
      ></path>
    </svg>
  );
};

ProductStaking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductStaking.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProductStaking;
