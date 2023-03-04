import React from 'react';
import PropTypes from 'prop-types';

const DassetEem = props => {
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
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0z"
      ></path>
      <path d="M5.148 15V9.242h3.457v.899H6.18v1.501H8.3v.875H6.18V14.1h2.425V15H5.148z"></path>
      <path d="M9.936 15V9.242h3.457v.899h-2.426v1.501h2.12v.875h-2.12V14.1h2.426V15H9.936z"></path>
      <path d="M18.626 11.716l.066-.973h-.116l-.38.94-1.039 2.22-1.031-2.22-.38-.932h-.115l.066.966V15h-.974V9.242h1.13l.859 1.872.42 1.18h.075l.42-1.18.842-1.873h1.13V15h-.973v-3.284z"></path>
    </svg>
  );
};

DassetEem.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetEem.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetEem;
