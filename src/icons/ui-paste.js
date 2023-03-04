import React from 'react';
import PropTypes from 'prop-types';

const UiPaste = props => {
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
      <g clipPath="url(#clip0_104_1146)">
        <path d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h4.175c.183-.583.542-1.063 1.075-1.438A2.98 2.98 0 0112 1c.667 0 1.263.187 1.788.562A2.75 2.75 0 0114.85 3H19c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zm0-2h14V5h-2v3H7V5H5v14zm7-14a.968.968 0 00.713-.288A.967.967 0 0013 4a.97.97 0 00-.287-.713A.97.97 0 0012 3a.967.967 0 00-.712.287A.968.968 0 0011 4c0 .283.096.52.288.712A.965.965 0 0012 5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1146">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPaste.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPaste.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPaste;
