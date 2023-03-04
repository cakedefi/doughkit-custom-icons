import React from 'react';
import PropTypes from 'prop-types';

const CryptoSol = props => {
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
      <circle cx="12" cy="12" r="12"></circle>
      <g clipPath="url(#clip0_104_4253)">
        <path d="M6.487 15.159a.501.501 0 01.354-.147h12.22a.25.25 0 01.177.428l-2.414 2.414a.501.501 0 01-.354.146H4.25a.25.25 0 01-.177-.427l2.414-2.414z"></path>
        <path d="M6.487 6.146A.515.515 0 016.841 6h12.22a.25.25 0 01.177.427l-2.414 2.414a.501.501 0 01-.354.146H4.25a.25.25 0 01-.177-.427l2.414-2.414z"></path>
        <path d="M16.824 10.624a.501.501 0 00-.354-.147H4.25a.25.25 0 00-.177.428l2.414 2.414c.092.092.22.146.354.146h12.22a.25.25 0 00.177-.428l-2.414-2.413z"></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_104_4253"
          x1="17.893"
          y1="4.558"
          x2="9.436"
          y2="20.756"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3"></stop>
          <stop offset="1" stopColor="#DC1FFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_104_4253"
          x1="14.195"
          y1="2.627"
          x2="5.739"
          y2="18.826"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3"></stop>
          <stop offset="1" stopColor="#DC1FFF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_104_4253"
          x1="16.033"
          y1="3.587"
          x2="7.576"
          y2="19.785"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3"></stop>
          <stop offset="1" stopColor="#DC1FFF"></stop>
        </linearGradient>
        <clipPath id="clip0_104_4253">
          <rect width="15.311" height="12" transform="translate(4 6)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CryptoSol.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoSol.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoSol;
