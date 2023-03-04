import React from 'react';
import PropTypes from 'prop-types';

const SignalWarning = props => {
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
      <g clipPath="url(#clip0_104_1091)">
        <path d="M2.725 21a.907.907 0 01-.85-.5.978.978 0 010-1l9.25-16c.183-.333.475-.5.875-.5s.692.167.875.5l9.25 16a.978.978 0 010 1 .907.907 0 01-.85.5H2.725zM12 10a.967.967 0 00-.712.287A.968.968 0 0011 11v3c0 .283.096.52.288.712A.965.965 0 0012 15a.968.968 0 00.713-.288A.967.967 0 0013 14v-3a.97.97 0 00-.287-.713A.97.97 0 0012 10zm0 8a.968.968 0 00.713-.288A.967.967 0 0013 17a.967.967 0 00-.287-.712A.968.968 0 0012 16a.965.965 0 00-.712.288A.965.965 0 0011 17c0 .283.096.52.288.712A.965.965 0 0012 18z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1091">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SignalWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SignalWarning.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SignalWarning;
