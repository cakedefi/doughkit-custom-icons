import React from 'react';
import PropTypes from 'prop-types';

const SignalSuccessCheck = props => {
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
      <g clipPath="url(#clip0_104_1092)">
        <path d="M10.6 13.8l-2.175-2.175a.918.918 0 00-.675-.275c-.267 0-.5.1-.7.3a.948.948 0 00-.275.7c0 .283.092.517.275.7L9.9 15.9a.948.948 0 00.7.275.948.948 0 00.7-.275l5.675-5.675a.918.918 0 00.275-.675c0-.267-.1-.5-.3-.7a.948.948 0 00-.7-.275.948.948 0 00-.7.275L10.6 13.8zM12 22a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1092">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SignalSuccessCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SignalSuccessCheck.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SignalSuccessCheck;
