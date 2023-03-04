import React from 'react';
import PropTypes from 'prop-types';

const UiMinusSubtractDecrease = props => {
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
      <g clipPath="url(#clip0_104_1180)">
        <path d="M6 13a.968.968 0 01-.713-.288A.967.967 0 015 12a.97.97 0 01.287-.713A.97.97 0 016 11h12c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0118 13H6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1180">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiMinusSubtractDecrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiMinusSubtractDecrease.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiMinusSubtractDecrease;
