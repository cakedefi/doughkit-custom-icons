import React from 'react';
import PropTypes from 'prop-types';

const UiChevronDownExpand = props => {
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
      <g clipPath="url(#clip0_104_1168)">
        <path d="M12 14.975a1.03 1.03 0 01-.7-.275l-4.6-4.6a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7a.948.948 0 01.7-.275c.283 0 .517.092.7.275l3.9 3.9 3.9-3.9a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7l-4.6 4.6c-.1.1-.208.17-.325.212a1.1 1.1 0 01-.375.063z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1168">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiChevronDownExpand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiChevronDownExpand.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiChevronDownExpand;
