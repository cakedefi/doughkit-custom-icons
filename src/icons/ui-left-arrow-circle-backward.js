import React from 'react';
import PropTypes from 'prop-types';

const UiLeftArrowCircleBackward = props => {
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
      <g clipPath="url(#clip0_104_1172)">
        <path d="M11.325 15.325c.183.183.413.27.688.262a.975.975 0 00.687-.287.948.948 0 00.275-.7.948.948 0 00-.275-.7l-.9-.9h3.225a.926.926 0 00.7-.288A.99.99 0 0016 12a.97.97 0 00-.287-.713A.97.97 0 0015 11h-3.2l.925-.925a.894.894 0 00.263-.688.979.979 0 00-.288-.687.948.948 0 00-.7-.275.948.948 0 00-.7.275l-2.6 2.6a.948.948 0 00-.275.7c0 .283.092.517.275.7l2.625 2.625zM12 22a9.733 9.733 0 01-3.9-.788 10.092 10.092 0 01-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 012.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0112 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 013.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0122 12a9.733 9.733 0 01-.788 3.9 10.092 10.092 0 01-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0112 22z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1172">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiLeftArrowCircleBackward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiLeftArrowCircleBackward.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiLeftArrowCircleBackward;
