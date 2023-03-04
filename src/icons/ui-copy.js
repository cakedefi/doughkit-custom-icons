import React from 'react';
import PropTypes from 'prop-types';

const UiCopy = props => {
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
      <g clipPath="url(#clip0_104_1124)">
        <path d="M5 22c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 20V6h2v14h11v2H5zm4-4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 017 16V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 019 2h9c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 18H9zm0-2h9V4H9v12zm0 0V4v12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1124">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCopy.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCopy;
