import React from 'react';
import PropTypes from 'prop-types';

const ProductYieldvault = props => {
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
        d="M10 18a1 1 0 100 2h4a1 1 0 100-2h-4zm-5-2a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1zm0-4a1 1 0 100 2h14a1 1 0 100-2H5z"
      ></path>
    </svg>
  );
};

ProductYieldvault.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductYieldvault.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProductYieldvault;
