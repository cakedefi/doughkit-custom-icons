import React from 'react';
import PropTypes from 'prop-types';

const UiHeartFavoriteLikeLove = props => {
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
      <g clipPath="url(#clip0_104_1120)">
        <path d="M10.65 19.8l-1.725-1.575a68.234 68.234 0 01-4.787-4.813C2.713 11.821 2 10.067 2 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65c.883 0 1.717.187 2.5.562.783.375 1.45.888 2 1.538a5.962 5.962 0 012-1.538 5.721 5.721 0 012.5-.562c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 1.917-.708 3.675-2.125 5.275a59.863 59.863 0 01-4.825 4.825l-1.7 1.55c-.383.35-.833.525-1.35.525-.517 0-.967-.175-1.35-.525z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1120">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiHeartFavoriteLikeLove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiHeartFavoriteLikeLove.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiHeartFavoriteLikeLove;
