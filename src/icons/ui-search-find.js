import React from 'react';
import PropTypes from 'prop-types';

const UiSearchFind = props => {
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
      <g clipPath="url(#clip0_104_1132)">
        <path d="M18.9 20.3l-5.6-5.6A6.096 6.096 0 019.5 16c-1.817 0-3.354-.629-4.612-1.887C3.629 12.854 3 11.317 3 9.5c0-1.817.63-3.354 1.888-4.613C6.146 3.629 7.683 3 9.5 3c1.817 0 3.354.629 4.613 1.887C15.371 6.146 16 7.683 16 9.5a6.096 6.096 0 01-1.3 3.8l5.625 5.625a.918.918 0 01.275.675c0 .267-.1.5-.3.7a.948.948 0 01-.7.275.948.948 0 01-.7-.275zM9.5 14c1.25 0 2.313-.437 3.188-1.312S14 10.75 14 9.5c0-1.25-.437-2.313-1.312-3.188S10.75 5 9.5 5c-1.25 0-2.313.437-3.188 1.312S5 8.25 5 9.5c0 1.25.437 2.313 1.312 3.188S8.25 14 9.5 14z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1132">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiSearchFind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiSearchFind.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiSearchFind;
