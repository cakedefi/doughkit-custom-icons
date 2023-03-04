import React from 'react';
import PropTypes from 'prop-types';

const UiChevronUpCollapse = props => {
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
      <g clipPath="url(#clip0_104_1167)">
        <path d="M6.7 14.7a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7l4.6-4.6c.1-.1.208-.171.325-.213a1.115 1.115 0 01.763.013c.125.05.229.117.312.2l4.6 4.6a.948.948 0 01.275.7.948.948 0 01-.275.7.948.948 0 01-.7.275.949.949 0 01-.7-.275L12 10.8l-3.9 3.9a.948.948 0 01-.7.275.948.948 0 01-.7-.275z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1167">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiChevronUpCollapse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiChevronUpCollapse.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiChevronUpCollapse;
