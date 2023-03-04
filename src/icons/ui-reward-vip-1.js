import React from 'react';
import PropTypes from 'prop-types';

const UiRewardVip1 = props => {
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
      <g clipPath="url(#clip0_104_1117)">
        <path d="M14 2c-.68 0-1.36.09-2.02.26-.53.14-.85.69-.72 1.22.14.53.69.85 1.22.72.49-.13 1-.19 1.52-.19 3.31 0 6 2.69 6 6 0 .51-.07 1.02-.19 1.52a1 1 0 00.97 1.25c.44 0 .85-.3.97-.75.17-.66.26-1.34.26-2.02C22 5.59 18.41 2 14 2z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 14c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8zm7.063.938L10 17l.938-2.063L13 14l-2.063-.938L10 11l-.938 2.063L7 14l2.063.938z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1117">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiRewardVip1.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiRewardVip1.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiRewardVip1;
