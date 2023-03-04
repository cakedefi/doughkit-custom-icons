import React from 'react';
import PropTypes from 'prop-types';

const Empty = props => {
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
      <g clipPath="url(#clip0_104_1104)">
        <rect width="24" height="24" rx="1" fillOpacity=".01"></rect>
      </g>
      <defs>
        <clipPath id="clip0_104_1104">
          <rect width="24" height="24" rx="1"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

Empty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Empty.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default Empty;
