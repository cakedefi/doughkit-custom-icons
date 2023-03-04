import React from 'react';
import PropTypes from 'prop-types';

const UiChevronRightForward = props => {
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
      <g clipPath="url(#clip0_104_1165)">
        <path d="M8.7 17.3a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7l3.9-3.9-3.9-3.9a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7a.948.948 0 01.7-.275c.283 0 .517.092.7.275l4.6 4.6c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 01-.213.325l-4.6 4.6a.948.948 0 01-.7.275.948.948 0 01-.7-.275z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1165">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiChevronRightForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiChevronRightForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiChevronRightForward;
