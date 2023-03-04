import React from 'react';
import PropTypes from 'prop-types';

const NavWallet = props => {
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
      <g clipPath="url(#clip0_104_1089)">
        <path d="M16 13.5c.433 0 .792-.142 1.075-.425.283-.283.425-.642.425-1.075 0-.433-.142-.792-.425-1.075-.283-.283-.642-.425-1.075-.425-.433 0-.792.142-1.075.425-.283.283-.425.642-.425 1.075 0 .433.142.792.425 1.075.283.283.642.425 1.075.425zM5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v2.5h-2V5H5v14h14v-2.5h2V19c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zm8-4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0111 15V9c0-.55.196-1.021.588-1.413A1.925 1.925 0 0113 7h7c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 17h-7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1089">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

NavWallet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NavWallet.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NavWallet;
