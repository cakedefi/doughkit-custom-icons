import React from 'react';
import PropTypes from 'prop-types';

const UiDeallocateDeallocation = props => {
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
      <g clipPath="url(#clip0_104_1096)">
        <path d="M5.14 18.006l1.096-.384c.326-.114.791-.01 1.059.207A7.45 7.45 0 0012 19.5c3.98 0 7.246-3.117 7.486-7.038a6.024 6.024 0 002.399-1.979c.075.495.114 1.002.114 1.517 0 5.514-4.486 10-10 10a9.963 9.963 0 01-7.119-2.988c-.363-.368-.23-.836.26-1.006z"></path>
        <path d="M13.516 2.115a6.024 6.024 0 00-1.979 2.4A7.456 7.456 0 007.295 6.17c-.268.217-.734.32-1.059.207L5.14 5.994c-.488-.17-.622-.638-.259-1.007a9.967 9.967 0 018.635-2.872z"></path>
        <path d="M3.083 8.183a1.246 1.246 0 01.979-.066l7.725 2.703a1.25 1.25 0 01.001 2.36l-7.726 2.703a1.25 1.25 0 01-1.61-.818 10.596 10.596 0 010-6.13c.1-.326.326-.598.63-.752z"></path>
        <path d="M14 8a1 1 0 110-2h6a1 1 0 110 2h-6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1096">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDeallocateDeallocation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDeallocateDeallocation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDeallocateDeallocation;
