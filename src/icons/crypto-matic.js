import React from 'react';
import PropTypes from 'prop-types';

const CryptoMatic = props => {
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
      <path d="M15.895 9.563c-.294-.167-.67-.167-1.006 0l-2.345 1.382-1.591.88-2.303 1.382c-.293.167-.67.167-1.005 0l-1.801-1.09a1.02 1.02 0 01-.503-.879V9.146c0-.335.168-.67.503-.88l1.8-1.047c.294-.167.67-.167 1.006 0l1.8 1.09c.293.167.503.502.503.878v1.382l1.591-.92V8.222c0-.335-.167-.67-.502-.88l-3.35-1.967c-.294-.168-.67-.168-1.006 0l-3.433 2.01a.921.921 0 00-.503.837v3.937c0 .335.168.67.503.88l3.392 1.968c.293.167.67.167 1.005 0l2.303-1.34 1.591-.922 2.303-1.34c.294-.168.67-.168 1.006 0l1.8 1.047c.294.167.503.503.503.88v2.093c0 .335-.168.67-.503.88l-1.758 1.047c-.294.167-.67.167-1.006 0l-1.8-1.047a1.02 1.02 0 01-.503-.88v-1.34l-1.591.921v1.382c0 .335.167.67.502.88l3.392 1.968c.294.168.67.168 1.006 0l3.392-1.968c.293-.168.502-.503.502-.88v-3.978c0-.335-.167-.67-.502-.88l-3.392-1.968z"></path>
    </svg>
  );
};

CryptoMatic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoMatic.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoMatic;
