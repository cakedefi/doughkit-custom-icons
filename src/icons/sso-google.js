import React from 'react';
import PropTypes from 'prop-types';

const SsoGoogle = props => {
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
        d="M6.097 12c0-.65.108-1.272.3-1.856L3.027 7.57A9.995 9.995 0 002 12c0 1.592.37 3.094 1.026 4.427l3.368-2.579A5.916 5.916 0 016.097 12"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.014 6.09c1.411 0 2.686.5 3.687 1.32l2.913-2.91c-1.775-1.545-4.05-2.5-6.6-2.5a9.985 9.985 0 00-8.987 5.57l3.37 2.574a5.901 5.901 0 015.617-4.053"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.014 17.91a5.902 5.902 0 01-5.617-4.054l-3.37 2.574A9.984 9.984 0 0012.014 22c2.443 0 4.775-.867 6.525-2.492l-3.2-2.473c-.902.568-2.038.874-3.325.874"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.573 12c0-.59-.09-1.227-.227-1.818h-9.332v3.864h5.372c-.27 1.317-1 2.33-2.046 2.989l3.199 2.473C20.377 17.8 21.573 15.26 21.573 12"
      ></path>
    </svg>
  );
};

SsoGoogle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SsoGoogle.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SsoGoogle;
