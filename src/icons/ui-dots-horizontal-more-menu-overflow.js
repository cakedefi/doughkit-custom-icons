import React from 'react';
import PropTypes from 'prop-types';

const UiDotsHorizontalMoreMenuOverflow = props => {
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
      <g clipPath="url(#clip0_104_1154)">
        <path d="M6 14c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 014 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 016 10c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.412A1.923 1.923 0 016 14zm6 0c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0110 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 0112 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0112 14zm6 0c-.55 0-1.021-.196-1.413-.588A1.925 1.925 0 0116 12c0-.55.196-1.021.587-1.413A1.928 1.928 0 0118 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0118 14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1154">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDotsHorizontalMoreMenuOverflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDotsHorizontalMoreMenuOverflow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDotsHorizontalMoreMenuOverflow;
