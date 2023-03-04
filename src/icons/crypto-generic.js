import React from 'react';
import PropTypes from 'prop-types';

const CryptoGeneric = props => {
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
      <circle cx="12" cy="12" r="12"></circle>
      <path d="M12.221 16.372c-.517 0-.986-.082-1.406-.247a2.921 2.921 0 01-1.069-.765 3.5 3.5 0 01-.675-1.249c-.157-.502-.236-1.084-.236-1.744 0-.66.079-1.245.236-1.755.158-.517.383-.948.675-1.293.3-.353.656-.619 1.069-.799.42-.18.889-.27 1.406-.27.705 0 1.29.15 1.755.45.465.3.836.754 1.114 1.361l-1.271.675a1.752 1.752 0 00-.552-.844c-.255-.217-.603-.326-1.046-.326-.555 0-.997.188-1.327.563-.323.375-.484.9-.484 1.575v1.237c0 .683.161 1.208.484 1.575.33.36.772.54 1.327.54.443 0 .803-.12 1.08-.36.285-.24.491-.536.619-.889l1.204.71c-.285.584-.664 1.042-1.137 1.372-.472.322-1.06.483-1.766.483z"></path>
    </svg>
  );
};

CryptoGeneric.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoGeneric.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoGeneric;
