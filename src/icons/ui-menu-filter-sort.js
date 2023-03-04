import React from 'react';
import PropTypes from 'prop-types';

const UiMenuFilterSort = props => {
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
      <g clipPath="url(#clip0_104_1110)">
        <path d="M11 18a.965.965 0 01-.712-.288A.965.965 0 0110 17c0-.283.096-.52.288-.712A.965.965 0 0111 16h2c.283 0 .521.096.713.288A.967.967 0 0114 17c0 .283-.096.52-.287.712A.968.968 0 0113 18h-2zM4 8a.967.967 0 01-.712-.287A.968.968 0 013 7c0-.283.096-.521.288-.713A.967.967 0 014 6h16c.283 0 .52.096.712.287.192.192.288.43.288.713a.968.968 0 01-.288.713A.967.967 0 0120 8H4zm3 5a.968.968 0 01-.713-.288A.967.967 0 016 12a.97.97 0 01.287-.713A.97.97 0 017 11h10c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0117 13H7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1110">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiMenuFilterSort.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiMenuFilterSort.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiMenuFilterSort;
