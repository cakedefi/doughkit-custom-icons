import React from 'react';
import PropTypes from 'prop-types';

const UiDotsVerticalMoreMenuOverflow = props => {
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
      <g clipPath="url(#clip0_104_1179)">
        <path d="M12 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0110 18c0-.55.196-1.021.588-1.413A1.925 1.925 0 0112 16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.021-.587 1.413A1.928 1.928 0 0112 20zm0-6c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0110 12c0-.55.196-1.021.588-1.413A1.925 1.925 0 0112 10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412A1.927 1.927 0 0112 14zm0-6c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0110 6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0112 4c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412 0 .55-.196 1.02-.587 1.412A1.927 1.927 0 0112 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1179">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDotsVerticalMoreMenuOverflow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDotsVerticalMoreMenuOverflow.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDotsVerticalMoreMenuOverflow;
