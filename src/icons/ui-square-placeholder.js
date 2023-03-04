import React from 'react';
import PropTypes from 'prop-types';

const UiSquarePlaceholder = props => {
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
      <g clipPath="url(#clip0_104_1128)">
        <path d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zm0-2h14V5H5v14zm0 0V5v14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1128">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiSquarePlaceholder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiSquarePlaceholder.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiSquarePlaceholder;
