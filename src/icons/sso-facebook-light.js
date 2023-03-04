import React from 'react';
import PropTypes from 'prop-types';

const SsoFacebookLight = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12c0 4.95 3.6 9.05 8.35 9.9l.06-.048-.01-.002V14.8H7.9V12h2.5V9.8c0-2.5 1.6-3.9 3.9-3.9.7 0 1.5.1 2.2.2v2.55h-1.3c-1.2 0-1.5.6-1.5 1.4V12h2.65l-.45 2.8h-2.2v7.05l-.091.016.041.034C18.4 21.05 22 16.95 22 12c0-5.5-4.5-10-10-10S2 6.5 2 12z"
      ></path>
    </svg>
  );
};

SsoFacebookLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SsoFacebookLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SsoFacebookLight;
