import React from 'react';
import PropTypes from 'prop-types';

const UiDevicePhoneMobileCallDial = props => {
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
      <g clipPath="url(#clip0_104_1107)">
        <path d="M10.5 20h3a.48.48 0 00.35-.15.48.48 0 000-.7.48.48 0 00-.35-.15h-3a.48.48 0 00-.35.15.48.48 0 000 .7c.1.1.217.15.35.15zM7 23c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 015 21V3c0-.55.196-1.021.588-1.413A1.925 1.925 0 017 1h10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v18c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0117 23H7zm0-7h10V6H7v10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1107">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDevicePhoneMobileCallDial.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDevicePhoneMobileCallDial.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDevicePhoneMobileCallDial;
