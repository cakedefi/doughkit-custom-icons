import React from 'react';
import PropTypes from 'prop-types';

const NavInvest = props => {
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
      <g clipPath="url(#clip0_104_1088)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.236 6.378l-1.095-.384c-.49-.17-.623-.638-.26-1.006A9.963 9.963 0 0112.001 2c5.513 0 10 4.486 10 10s-4.487 10-10 10a9.967 9.967 0 01-7.12-2.987c-.363-.37-.23-.836.259-1.007l1.096-.384c.325-.113.791-.01 1.059.207A7.453 7.453 0 0012 19.5c4.135 0 7.5-3.364 7.5-7.5S16.136 4.5 12 4.5a7.45 7.45 0 00-4.706 1.671c-.268.217-.733.32-1.059.207zm-3.153 9.44a1.246 1.246 0 00.979.066l7.725-2.704a1.25 1.25 0 00.001-2.36L4.062 8.117a1.25 1.25 0 00-1.61.818 10.596 10.596 0 000 6.13c.1.326.326.598.63.752z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1088">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

NavInvest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NavInvest.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NavInvest;
