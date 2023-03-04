import React from 'react';
import PropTypes from 'prop-types';

const CryptoDash = props => {
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
      <g clipPath="url(#clip0_104_4245)">
        <path d="M11.938 23.892c6.6 0 11.947-5.346 11.947-11.946S18.538 0 11.938 0C5.338 0 0 5.346 0 11.946s5.346 11.946 11.938 11.946z"></path>
        <path d="M13.761 6.77H9.07l-.384 2.168 4.23.008c2.085 0 2.7.754 2.685 2.008-.008.646-.285 1.73-.408 2.085-.323.938-.977 2.015-3.454 2.007H7.623l-.392 2.177h4.677c1.646 0 2.354-.192 3.092-.538 1.646-.762 2.63-2.385 3.023-4.508.592-3.162-.138-5.408-4.261-5.408z"></path>
        <path d="M7.054 10.908c-1.23 0-1.408.8-1.523 1.284-.154.631-.2.893-.2.893h4.8c1.23 0 1.407-.8 1.523-1.285.154-.63.2-.892.2-.892h-4.8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_4245">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CryptoDash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoDash.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoDash;
