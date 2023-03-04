import React from 'react';
import PropTypes from 'prop-types';

const UiCollateralLiquidatedLiquidationVaultDrop = props => {
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
      <g clipPath="url(#clip0_104_1102)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 21h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h10v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2zm8.713-5.288A.968.968 0 0112 16a.965.965 0 01-.712-.288A.965.965 0 0111 15c0-.283.096-.521.288-.713A.967.967 0 0112 14a.97.97 0 01.713.287A.97.97 0 0113 15c0 .283-.096.52-.287.712zm0-4A.968.968 0 0112 12a.965.965 0 01-.712-.288A.965.965 0 0111 11V7c0-.283.096-.521.288-.713A.967.967 0 0112 6a.97.97 0 01.713.287A.97.97 0 0113 7v4c0 .283-.096.52-.287.712z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1102">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCollateralLiquidatedLiquidationVaultDrop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCollateralLiquidatedLiquidationVaultDrop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCollateralLiquidatedLiquidationVaultDrop;
