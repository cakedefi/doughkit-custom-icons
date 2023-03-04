import React from 'react';
import PropTypes from 'prop-types';

const UiAppearanceModeLightDark = props => {
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
      <g clipPath="url(#clip0_104_1113)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 4v4c4.41 0 8-3.59 8-8s-3.59-8-8-8v4c-2.21 0-4 1.79-4 4s1.79 4 4 4zm4.17-4c0 2.21-1.79 4-4 4V8c2.21 0 4 1.79 4 4z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1113">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiAppearanceModeLightDark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiAppearanceModeLightDark.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiAppearanceModeLightDark;
