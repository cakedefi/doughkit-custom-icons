import React from 'react';
import PropTypes from 'prop-types';

const UiCoinStackAssetsCurrencies = props => {
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
      <g clipPath="url(#clip0_104_1115)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.98 2.26A8.11 8.11 0 0114 2c4.41 0 8 3.59 8.01 8.01 0 .68-.09 1.36-.26 2.02a1.012 1.012 0 01-1.22.72 1 1 0 01-.72-1.22c.12-.5.19-1.01.19-1.52 0-3.31-2.69-6-6-6-.52 0-1.03.06-1.52.19-.53.13-1.08-.19-1.22-.72-.13-.53.19-1.08.72-1.22zM2 14c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1115">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCoinStackAssetsCurrencies.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCoinStackAssetsCurrencies.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCoinStackAssetsCurrencies;
