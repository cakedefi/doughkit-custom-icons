import React from 'react';
import PropTypes from 'prop-types';

const UiReward = props => {
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
      <g clipPath="url(#clip0_104_1116)">
        <path d="M6 11L4.75 8.25 2 7l2.75-1.25L6 3l1.25 2.75L10 7 7.25 8.25 6 11z"></path>
        <path d="M10.92 4a1 1 0 011-1c4.972 0 9 4.028 9 9s-4.028 9-9 9a8.98 8.98 0 01-7.786-4.5 1 1 0 111.732-1A6.98 6.98 0 0011.92 19c3.868 0 7-3.132 7-7s-3.132-7-7-7a1 1 0 01-1-1z"></path>
        <path d="M15 15a.994.994 0 01-1.41 0l-2.29-2.29A1 1 0 0111 12V9c0-.55.45-1 1-1s1 .45 1 1v2.59l2 2c.39.39.39 1.02 0 1.41z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1116">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiReward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiReward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiReward;
