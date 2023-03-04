import React from 'react';
import PropTypes from 'prop-types';

const UiRightArrowCircleForward = props => {
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
      <g clipPath="url(#clip0_104_1161)">
        <path d="M12.7 15.3l2.6-2.6a.948.948 0 00.275-.7.948.948 0 00-.275-.7l-2.625-2.625a.893.893 0 00-.687-.263.98.98 0 00-.688.288.948.948 0 00-.275.7c0 .283.092.517.275.7l.9.9H8.975a.928.928 0 00-.7.287A.993.993 0 008 12c0 .283.096.52.288.712A.965.965 0 009 13h3.2l-.925.925a.894.894 0 00-.263.688.979.979 0 00.288.687.948.948 0 00.7.275.948.948 0 00.7-.275zM12 22a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1161">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiRightArrowCircleForward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiRightArrowCircleForward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiRightArrowCircleForward;
