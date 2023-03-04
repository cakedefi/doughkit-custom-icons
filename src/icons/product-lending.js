import React from 'react';
import PropTypes from 'prop-types';

const ProductLending = props => {
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
        d="M19 13a1 1 0 100-2h-4a2 2 0 01-2-2V5a1 1 0 10-2 0v4a4 4 0 004 4h4zm0-4a1 1 0 01-1 1h-2.5A1.5 1.5 0 0114 8.5V6a1 1 0 112 0v2h2a1 1 0 011 1zm-1 7a1 1 0 100-2h-3a5 5 0 01-5-5V6a1 1 0 10-2 0v3a7 7 0 007 7h3z"
      ></path>
    </svg>
  );
};

ProductLending.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ProductLending.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default ProductLending;
