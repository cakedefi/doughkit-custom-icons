import React from 'react';
import PropTypes from 'prop-types';

const UiHideVisibilityOffEye = props => {
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
      <g clipPath="url(#clip0_104_1176)">
        <path d="M19.3 16.5l-3.2-3.2a4.25 4.25 0 00.3-.862c.067-.292.1-.605.1-.938 0-1.25-.437-2.313-1.312-3.188S13.25 7 12 7c-.333 0-.646.033-.938.1a4.244 4.244 0 00-.862.3L7.65 4.85a11.106 11.106 0 012.1-.638A11.608 11.608 0 0112 4c2.383 0 4.525.629 6.425 1.887 1.9 1.259 3.325 2.896 4.275 4.913.05.083.083.187.1.312s.025.255.025.388a1.987 1.987 0 01-.125.7 11.5 11.5 0 01-1.437 2.375A10.479 10.479 0 0119.3 16.5zm-.2 5.4l-3.5-3.45c-.583.183-1.17.321-1.762.413-.592.091-1.205.137-1.838.137-2.383 0-4.525-.629-6.425-1.887-1.9-1.259-3.325-2.896-4.275-4.913a.813.813 0 01-.1-.313 2.919 2.919 0 010-.762.796.796 0 01.1-.3c.35-.75.767-1.442 1.25-2.075A13.29 13.29 0 014.15 7L2.075 4.9a.933.933 0 01-.275-.688c0-.275.1-.512.3-.712a.948.948 0 01.7-.275c.283 0 .517.092.7.275l17 17a.98.98 0 01.288.688.932.932 0 01-.288.712.948.948 0 01-.7.275.948.948 0 01-.7-.275zM12 16c.183 0 .354-.008.512-.025.159-.017.33-.05.513-.1l-5.4-5.4a3.25 3.25 0 00-.1.513 4.895 4.895 0 00-.025.512c0 1.25.437 2.313 1.312 3.188S10.75 16 12 16zm2.65-4.15l-3-3c.95-.15 1.725.117 2.325.8.6.683.825 1.417.675 2.2z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1176">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiHideVisibilityOffEye.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiHideVisibilityOffEye.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiHideVisibilityOffEye;
