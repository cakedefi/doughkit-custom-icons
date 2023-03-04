import React from 'react';
import PropTypes from 'prop-types';

const DassetTlt = props => {
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
      <path d="M8.766 10.14V15H7.735v-4.86H6.29v-.899h3.927v.9H8.766z"></path>
      <path d="M11.322 15V9.241h1.03v4.86h2.022V15h-3.052z"></path>
      <path d="M17.004 10.14V15h-1.032v-4.86H14.53v-.899h3.927v.9h-1.452z"></path>
    </svg>
  );
};

DassetTlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetTlt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetTlt;
