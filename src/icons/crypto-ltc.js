import React from 'react';
import PropTypes from 'prop-types';

const CryptoLtc = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12c6.629 0 12-5.372 12-12S18.629 0 12 0z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.188 12.397l-1.243 4.213 6.666.002c.23 0 .394.218.331.438l-.573 2.002a.457.457 0 01-.44.33l-10.2-.002 1.724-5.827-1.908.592.408-1.385 1.91-.592 2.421-8.183a.457.457 0 01.44-.332l2.582.002c.229 0 .393.218.331.437l-2.039 6.916 1.909-.59-.41 1.385-1.91.594z"
      ></path>
    </svg>
  );
};

CryptoLtc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoLtc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoLtc;
