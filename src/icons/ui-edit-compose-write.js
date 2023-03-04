import React from 'react';
import PropTypes from 'prop-types';

const UiEditComposeWrite = props => {
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
      <g clipPath="url(#clip0_104_1111)">
        <path d="M19.3 8.925l-4.25-4.2 1.4-1.4a1.92 1.92 0 011.413-.575 1.92 1.92 0 011.412.575l1.4 1.4c.383.383.583.846.6 1.388a1.806 1.806 0 01-.55 1.387L19.3 8.925zM17.85 10.4L7.25 21H3v-4.25l10.6-10.6 4.25 4.25z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1111">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiEditComposeWrite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiEditComposeWrite.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiEditComposeWrite;
