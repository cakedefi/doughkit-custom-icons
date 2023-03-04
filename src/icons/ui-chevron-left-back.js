import React from 'react';
import PropTypes from 'prop-types';

const UiChevronLeftBack = props => {
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
      <g clipPath="url(#clip0_104_1166)">
        <path d="M13.3 17.3l-4.6-4.6a.871.871 0 01-.212-.325A1.1 1.1 0 018.425 12a1.1 1.1 0 01.063-.375.871.871 0 01.212-.325l4.6-4.6a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7L10.8 12l3.9 3.9a.948.948 0 01.275.7.948.948 0 01-.275.7.948.948 0 01-.7.275.949.949 0 01-.7-.275z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1166">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiChevronLeftBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiChevronLeftBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiChevronLeftBack;
