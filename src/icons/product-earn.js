import React from 'react';
import PropTypes from 'prop-types';

const ProductEarn = props => {
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
        d="M11 5a1 1 0 011-1 8 8 0 018 8 1 1 0 11-2 0 6 6 0 00-6-6 1 1 0 01-1-1zm1 15a1 1 0 100-2 6 6 0 01-6-6 1 1 0 10-2 0 8 8 0 008 8zM11 8a1 1 0 011-1 5 5 0 015 5 1 1 0 11-2 0 3 3 0 00-3-3 1 1 0 01-1-1zm1 9a1 1 0 100-2 3 3 0 01-3-3 1 1 0 10-2 0 5 5 0 005 5z"
      ></path>
    </svg>
  );
};

ProductEarn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductEarn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProductEarn;
