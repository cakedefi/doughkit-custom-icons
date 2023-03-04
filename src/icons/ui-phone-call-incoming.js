import React from 'react';
import PropTypes from 'prop-types';

const UiPhoneCallIncoming = props => {
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
      <g clipPath="url(#clip0_104_1144)">
        <path d="M13.8 11a.965.965 0 01-.712-.288A.965.965 0 0112.8 10V6c0-.283.096-.521.288-.713A.967.967 0 0113.8 5a.97.97 0 01.713.287A.97.97 0 0114.8 6v1.6l4.3-4.3a.948.948 0 01.7-.275c.283 0 .517.092.7.275a.948.948 0 01.275.7.948.948 0 01-.275.7L16.2 9h1.6a.97.97 0 01.713.287.97.97 0 01.287.713c0 .283-.096.52-.287.712A.968.968 0 0117.8 11h-4zm6.15 10c-2.15 0-4.246-.48-6.287-1.438a19.045 19.045 0 01-5.425-3.8 19.045 19.045 0 01-3.8-5.425C3.479 8.296 3 6.2 3 4.05c0-.3.1-.55.3-.75.2-.2.45-.3.75-.3H8.1a.96.96 0 01.625.225.88.88 0 01.325.575l.65 3.5c.033.233.03.446-.012.637a1.027 1.027 0 01-.288.513L7 10.9c.7 1.2 1.575 2.325 2.625 3.375A18.293 18.293 0 0013.1 17l2.35-2.35c.15-.15.346-.263.588-.338.241-.075.479-.095.712-.062l3.45.7c.233.05.425.162.575.337.15.175.225.38.225.613v4.05c0 .3-.1.55-.3.75-.2.2-.45.3-.75.3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1144">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPhoneCallIncoming.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPhoneCallIncoming.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPhoneCallIncoming;
