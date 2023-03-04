import React from 'react';
import PropTypes from 'prop-types';

const CryptoEth = props => {
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
      <g clipPath="url(#clip0_104_4249)">
        <circle cx="12" cy="12" r="12"></circle>
        <path d="M11.998 3v6.652l5.623 2.513L12 3z" fillOpacity=".602"></path>
        <path d="M11.998 3l-5.623 9.165 5.623-2.512V3z"></path>
        <path
          d="M11.998 16.476v4.52l5.627-7.784-5.627 3.264z"
          fillOpacity=".602"
        ></path>
        <path d="M11.998 20.996v-4.52l-5.623-3.264 5.623 7.784z"></path>
        <path
          d="M11.998 15.43l5.623-3.265L12 9.654v5.776z"
          fillOpacity=".2"
        ></path>
        <path
          d="M6.375 12.165l5.623 3.265V9.654l-5.623 2.511z"
          fillOpacity=".602"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_4249">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CryptoEth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoEth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoEth;
