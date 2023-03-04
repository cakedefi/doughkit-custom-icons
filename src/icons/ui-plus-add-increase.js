import React from 'react';
import PropTypes from 'prop-types';

const UiPlusAddIncrease = props => {
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
      <g clipPath="url(#clip0_104_1153)">
        <path d="M12 19a.965.965 0 01-.712-.288A.965.965 0 0111 18v-5H6a.968.968 0 01-.713-.288A.967.967 0 015 12a.97.97 0 01.287-.713A.97.97 0 016 11h5V6c0-.283.096-.521.288-.713A.967.967 0 0112 5a.97.97 0 01.713.287A.97.97 0 0113 6v5h5c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0118 13h-5v5c0 .283-.096.52-.287.712A.968.968 0 0112 19z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1153">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPlusAddIncrease.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPlusAddIncrease.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPlusAddIncrease;
