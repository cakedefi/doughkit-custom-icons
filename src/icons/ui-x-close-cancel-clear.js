import React from 'react';
import PropTypes from 'prop-types';

const UiXCloseCancelClear = props => {
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
      <g clipPath="url(#clip0_104_1173)">
        <path d="M12 13.4l-4.9 4.9a.948.948 0 01-.7.275.948.948 0 01-.7-.275.948.948 0 01-.275-.7c0-.283.092-.517.275-.7l4.9-4.9-4.9-4.9a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7a.948.948 0 01.7-.275c.283 0 .517.092.7.275l4.9 4.9 4.9-4.9a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7L13.4 12l4.9 4.9a.948.948 0 01.275.7.948.948 0 01-.275.7.948.948 0 01-.7.275.948.948 0 01-.7-.275L12 13.4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1173">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiXCloseCancelClear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiXCloseCancelClear.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiXCloseCancelClear;
