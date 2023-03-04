import React from 'react';
import PropTypes from 'prop-types';

const UiUpgradeLevelUpUpArrowIncrease = props => {
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
      <g clipPath="url(#clip0_104_1182)">
        <path d="M12 16a.965.965 0 01-.712-.288A.965.965 0 0111 15V7.825L9.1 9.7a.978.978 0 01-.687.288A.933.933 0 017.7 9.7a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7l3.6-3.6c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.258.02.375.062a.883.883 0 01.325.213l3.6 3.6a.975.975 0 01.287.687.93.93 0 01-.287.713.948.948 0 01-.7.275.948.948 0 01-.7-.275L13 7.825V15c0 .283-.096.52-.287.712A.968.968 0 0112 16zm-4 4a.968.968 0 01-.713-.288A.967.967 0 017 19c0-.283.096-.52.287-.712A.968.968 0 018 18h8c.283 0 .52.096.712.288A.965.965 0 0117 19c0 .283-.096.52-.288.712A.965.965 0 0116 20H8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1182">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiUpgradeLevelUpUpArrowIncrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiUpgradeLevelUpUpArrowIncrease.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiUpgradeLevelUpUpArrowIncrease;
