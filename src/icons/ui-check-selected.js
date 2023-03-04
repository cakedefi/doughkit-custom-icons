import React from 'react';
import PropTypes from 'prop-types';

const UiCheckSelected = props => {
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
      <g clipPath="url(#clip0_104_1160)">
        <path d="M9 16.17L5.53 12.7a.997.997 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.997.997 0 10-1.41-1.41L9 16.17z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1160">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCheckSelected.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCheckSelected.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCheckSelected;
