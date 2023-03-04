import React from 'react';
import PropTypes from 'prop-types';

const UiDownArrowDescendingDeposit = props => {
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
      <g clipPath="url(#clip0_104_1170)">
        <path d="M12 19.575a1.1 1.1 0 01-.375-.063.872.872 0 01-.325-.212l-6.6-6.6c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712.2-.2.433-.3.7-.3.267 0 .5.1.7.3l4.9 4.9v-11.2c0-.283.096-.517.288-.7A.99.99 0 0112 4a.97.97 0 01.713.287A.97.97 0 0113 5v11.175l4.9-4.9c.2-.2.433-.3.7-.3.267 0 .5.1.7.3.2.2.3.437.3.712 0 .275-.1.513-.3.713l-6.6 6.6c-.1.1-.208.17-.325.212a1.098 1.098 0 01-.375.063z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1170">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDownArrowDescendingDeposit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDownArrowDescendingDeposit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDownArrowDescendingDeposit;
