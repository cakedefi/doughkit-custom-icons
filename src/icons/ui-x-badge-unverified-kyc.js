import React from 'react';
import PropTypes from 'prop-types';

const UiXBadgeUnverifiedKyc = props => {
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
      <g clipPath="url(#clip0_104_1178)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.95 18.7l2.75.6 1.45 2.45a.93.93 0 00.55.425c.233.067.467.058.7-.025l2.6-1.1 2.6 1.1c.233.083.467.092.7.025a.93.93 0 00.55-.425l1.45-2.45 2.75-.6c.25-.05.45-.18.6-.388a.926.926 0 00.175-.687L20.55 14.8l1.875-2.15c.167-.183.25-.4.25-.65a.934.934 0 00-.25-.65L20.55 9.2l.275-2.825a.926.926 0 00-.175-.687.943.943 0 00-.6-.388l-2.75-.6-1.45-2.45a.93.93 0 00-.55-.425 1.12 1.12 0 00-.7.025L12 2.95l-2.6-1.1a1.12 1.12 0 00-.7-.025.93.93 0 00-.55.425L6.7 4.7l-2.75.6c-.25.05-.45.18-.6.388a.926.926 0 00-.175.687L3.45 9.2l-1.875 2.15a.934.934 0 00-.25.65c0 .25.083.467.25.65L3.45 14.8l-.275 2.825a.926.926 0 00.175.687c.15.209.35.338.6.388zm4.45-2.125a.948.948 0 01-.7-.275.976.976 0 01-.287-.688.89.89 0 01.262-.687L10.6 12 7.7 9.1a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7a.98.98 0 01.688-.288.893.893 0 01.687.263L12 10.6l2.9-2.9a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.975.975 0 01.287.687.891.891 0 01-.262.688L13.4 12l2.9 2.9a.948.948 0 01.275.7.948.948 0 01-.275.7.975.975 0 01-.687.287.891.891 0 01-.688-.262L12 13.4l-2.9 2.9a.948.948 0 01-.7.275z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1178">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiXBadgeUnverifiedKyc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiXBadgeUnverifiedKyc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiXBadgeUnverifiedKyc;
