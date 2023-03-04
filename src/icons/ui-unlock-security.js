import React from 'react';
import PropTypes from 'prop-types';

const UiUnlockSecurity = props => {
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
      <g clipPath="url(#clip0_104_1177)">
        <path d="M6 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 20V10c0-.55.196-1.021.588-1.413A1.925 1.925 0 016 8h9V6c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 0012 3a2.87 2.87 0 00-1.812.612A2.99 2.99 0 009.125 5.15c-.083.25-.212.454-.387.612A.885.885 0 018.125 6c-.333 0-.6-.113-.8-.338a.81.81 0 01-.2-.762c.25-1.117.825-2.046 1.725-2.788C9.75 1.371 10.8 1 12 1c1.383 0 2.563.487 3.538 1.462C16.513 3.437 17 4.617 17 6v2h1c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v10c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 22H6zm6-5c.55 0 1.021-.196 1.413-.587.391-.392.587-.863.587-1.413s-.196-1.021-.587-1.413A1.928 1.928 0 0012 13c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0010 15c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1177">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiUnlockSecurity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiUnlockSecurity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiUnlockSecurity;
