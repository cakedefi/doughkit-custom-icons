import React from 'react';
import PropTypes from 'prop-types';

const UiRightArrowForward = props => {
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
      <g clipPath="url(#clip0_104_1163)">
        <path d="M11.3 19.3a.994.994 0 01-.288-.7.91.91 0 01.263-.7l4.9-4.9H5a.968.968 0 01-.713-.288A.967.967 0 014 12a.97.97 0 01.287-.713A.97.97 0 015 11h11.175l-4.9-4.9a.91.91 0 01-.263-.7.994.994 0 01.288-.7.948.948 0 01.7-.275c.283 0 .517.092.7.275l6.6 6.6c.1.083.171.187.213.312.041.125.062.255.062.388s-.02.258-.062.375a.883.883 0 01-.213.325l-6.6 6.6a.948.948 0 01-.7.275.948.948 0 01-.7-.275z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1163">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiRightArrowForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiRightArrowForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiRightArrowForward;
