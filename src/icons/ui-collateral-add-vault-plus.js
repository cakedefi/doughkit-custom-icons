import React from 'react';
import PropTypes from 'prop-types';

const UiCollateralAddVaultPlus = props => {
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
      <g clipPath="url(#clip0_104_1100)">
        <path d="M11 8a1 1 0 112 0v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H9a1 1 0 110-2h2V8z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 21H4c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1s-1-.45-1-1v-1zM19 3H5c-.55 0-1 .45-1 1v14a1 1 0 001 1h14a1 1 0 001-1V4c0-.55-.45-1-1-1z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1100">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCollateralAddVaultPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCollateralAddVaultPlus.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCollateralAddVaultPlus;
