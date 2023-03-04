import React from 'react';
import PropTypes from 'prop-types';

const CryptoXrp = props => {
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
      <path d="M12 24A12 12 0 1012 .002 12 12 0 0012 24z"></path>
      <path d="M16.39 6.89h1.805l-3.752 3.743a3.478 3.478 0 01-4.916 0L5.786 6.889h1.802l2.85 2.844a2.203 2.203 0 003.113 0l2.84-2.844z"></path>
      <path d="M7.58 17.301H5.785l3.765-3.767a3.478 3.478 0 014.915 0l3.774 3.767h-1.802l-2.872-2.867a2.203 2.203 0 00-3.113 0l-2.874 2.867z"></path>
    </svg>
  );
};

CryptoXrp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoXrp.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoXrp;
