import React from 'react';
import PropTypes from 'prop-types';

const CryptoDusd = props => {
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
      <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"></path>
      <path
        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z"
        fillOpacity=".2"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.978 2.77l1.934.518-.94 3.508 3.508.94-.518 1.935-4.078-1.093-1.371.791a.998.998 0 101 1.73 3.002 3.002 0 013.136 5.116l-.136.083-1.543.891-1.061 3.961-1.934-.518.908-3.393-3.391-.908.518-1.934 3.957 1.06 1.544-.893a1 1 0 10-.998-1.731 3 3 0 01-4.1-1.098 3 3 0 01.963-4.017l.136-.083 1.375-.794 1.09-4.071z"
      ></path>
    </svg>
  );
};

CryptoDusd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoDusd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoDusd;
