import React from 'react';
import PropTypes from 'prop-types';

const UiAllocateAllocation = props => {
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
      <g clipPath="url(#clip0_104_1095)">
        <path d="M6.236 17.622l-1.095.384c-.49.17-.623.638-.26 1.006A9.963 9.963 0 0012.001 22c5.513 0 10-4.486 10-10 0-.515-.04-1.022-.115-1.517a6.024 6.024 0 01-2.4 1.98C19.247 16.382 15.982 19.5 12 19.5a7.45 7.45 0 01-4.705-1.671c-.268-.217-.733-.32-1.059-.207z"></path>
        <path d="M11.537 4.514a6.024 6.024 0 011.979-2.4 9.967 9.967 0 00-8.635 2.872c-.363.37-.23.837.259 1.008l1.096.384c.325.113.791.01 1.059-.207a7.456 7.456 0 014.242-1.657z"></path>
        <path d="M3.083 8.183a1.246 1.246 0 01.979-.066l7.725 2.703a1.25 1.25 0 01.001 2.36l-7.726 2.703a1.25 1.25 0 01-1.61-.818 10.596 10.596 0 010-6.13c.1-.326.326-.598.63-.752z"></path>
        <path d="M16 10a1 1 0 102 0V8h2a1 1 0 100-2h-2V4a1 1 0 10-2 0v2h-2a1 1 0 100 2h2v2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1095">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiAllocateAllocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiAllocateAllocation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiAllocateAllocation;
