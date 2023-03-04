import React from 'react';
import PropTypes from 'prop-types';

const UiQrScan = props => {
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
      <g clipPath="url(#clip0_104_1150)">
        <path d="M5 11c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 013 9V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 019 11H5zm0-2h4V5H5v4zm0 12c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19v-4c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 13h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 019 21H5zm0-2h4v-4H5v4zm10-8c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0113 9V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 0115 3h4c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v4c0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0119 11h-4zm0-2h4V5h-4v4zm4.5 12a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm-6-6a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm2 2a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm-2 2a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm2 2a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm2-2a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm0-4a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1zm2 2a.48.48 0 01-.35-.15.48.48 0 01-.15-.35v-1c0-.133.05-.25.15-.35.1-.1.217-.15.35-.15h1c.133 0 .25.05.35.15.1.1.15.217.15.35v1a.48.48 0 01-.15.35.48.48 0 01-.35.15h-1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1150">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiQrScan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiQrScan.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiQrScan;
