import React from 'react';
import PropTypes from 'prop-types';

const UiHeartFavoriteLikeLoveOutline = props => {
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
      <g clipPath="url(#clip0_104_1119)">
        <path d="M10.65 19.8l-1.725-1.575a68.234 68.234 0 01-4.787-4.813C2.713 11.821 2 10.067 2 8.15c0-1.567.525-2.875 1.575-3.925C4.625 3.175 5.933 2.65 7.5 2.65c.883 0 1.717.187 2.5.562.783.375 1.45.888 2 1.538a5.962 5.962 0 012-1.538 5.721 5.721 0 012.5-.562c1.567 0 2.875.525 3.925 1.575C21.475 5.275 22 6.583 22 8.15c0 1.917-.708 3.675-2.125 5.275a59.863 59.863 0 01-4.825 4.825l-1.7 1.55a1.89 1.89 0 01-1.35.55 1.89 1.89 0 01-1.35-.55zm.4-13.05c-.483-.683-1-1.204-1.55-1.563-.55-.358-1.217-.537-2-.537-1 0-1.833.333-2.5 1s-1 1.5-1 2.5c0 .867.308 1.787.925 2.762a19.063 19.063 0 002.213 2.838 38.261 38.261 0 002.65 2.575c.908.8 1.645 1.458 2.212 1.975.567-.517 1.304-1.175 2.213-1.975a38.57 38.57 0 002.65-2.575 19.101 19.101 0 002.212-2.838c.617-.975.925-1.895.925-2.762 0-1-.333-1.833-1-2.5s-1.5-1-2.5-1c-.783 0-1.45.179-2 .537-.55.359-1.067.88-1.55 1.563a1.138 1.138 0 01-.95.5 1.138 1.138 0 01-.95-.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1119">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiHeartFavoriteLikeLoveOutline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiHeartFavoriteLikeLoveOutline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiHeartFavoriteLikeLoveOutline;
