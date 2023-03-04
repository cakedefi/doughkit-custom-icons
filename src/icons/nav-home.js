import React from 'react';
import PropTypes from 'prop-types';

const NavHome = props => {
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
      <g clipPath="url(#clip0_104_1087)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 9c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 013 7V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h8c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v2c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0113 9H5zm0 12c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19v-6c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 11h14c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v6c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zM19 9c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0117 7V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 0119 3c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v2c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0119 9zM5 14a1 1 0 011-1h2a1 1 0 110 2H6a1 1 0 01-1-1zm7-1a1 1 0 100 2h2a1 1 0 100-2h-2z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1087">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

NavHome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NavHome.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default NavHome;
