import React from 'react';
import PropTypes from 'prop-types';

const UiCheckBadgeVerifiedKyc = props => {
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
      <g clipPath="url(#clip0_104_1155)">
        <path d="M6.7 19.3l-2.75-.6a.942.942 0 01-.6-.388.926.926 0 01-.175-.687L3.45 14.8l-1.875-2.15a.934.934 0 01-.25-.65c0-.25.083-.467.25-.65L3.45 9.2l-.275-2.825a.926.926 0 01.175-.687.943.943 0 01.6-.388l2.75-.6 1.45-2.45a.93.93 0 01.55-.425 1.12 1.12 0 01.7.025l2.6 1.1 2.6-1.1a1.12 1.12 0 01.7-.025.93.93 0 01.55.425L17.3 4.7l2.75.6c.25.05.45.18.6.388.15.208.208.437.175.687L20.55 9.2l1.875 2.15c.167.183.25.4.25.65s-.083.467-.25.65L20.55 14.8l.275 2.825a.926.926 0 01-.175.687.942.942 0 01-.6.388l-2.75.6-1.45 2.45a.93.93 0 01-.55.425 1.119 1.119 0 01-.7-.025l-2.6-1.1-2.6 1.1a1.119 1.119 0 01-.7.025.93.93 0 01-.55-.425L6.7 19.3zm3.55-4.45a.948.948 0 00.7.275.948.948 0 00.7-.275l4.25-4.25c.2-.2.3-.438.3-.713 0-.275-.1-.512-.3-.712-.2-.2-.437-.3-.712-.3-.275 0-.513.1-.713.3L10.95 12.7 9.5 11.275a.974.974 0 00-.712-.263.98.98 0 00-.688.288.948.948 0 00-.275.7c0 .283.092.517.275.7l2.15 2.15z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1155">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCheckBadgeVerifiedKyc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCheckBadgeVerifiedKyc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCheckBadgeVerifiedKyc;
