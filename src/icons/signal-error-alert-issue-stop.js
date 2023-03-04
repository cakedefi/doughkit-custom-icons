import React from 'react';
import PropTypes from 'prop-types';

const SignalErrorAlertIssueStop = props => {
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
      <g clipPath="url(#clip0_104_1094)">
        <path d="M12 17a.968.968 0 00.713-.288A.967.967 0 0013 16a.97.97 0 00-.287-.713A.97.97 0 0012 15a.967.967 0 00-.712.287A.968.968 0 0011 16c0 .283.096.52.288.712A.965.965 0 0012 17zm0 5a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22zm0-9a.968.968 0 00.713-.288A.967.967 0 0013 12V8a.97.97 0 00-.287-.713A.97.97 0 0012 7a.967.967 0 00-.712.287A.968.968 0 0011 8v4c0 .283.096.52.288.712A.965.965 0 0012 13z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1094">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SignalErrorAlertIssueStop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SignalErrorAlertIssueStop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SignalErrorAlertIssueStop;
