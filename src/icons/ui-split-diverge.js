import React from 'react';
import PropTypes from 'prop-types';

const UiSplitDiverge = props => {
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
      <g clipPath="url(#clip0_104_1125)">
        <path d="M14.85 10.6L13.4 9.15 16.6 6H15a.967.967 0 01-.712-.287A.968.968 0 0114 5c0-.283.096-.521.288-.713A.967.967 0 0115 4h4c.283 0 .52.096.712.287.192.192.288.43.288.713v4c0 .283-.096.52-.288.712A.965.965 0 0119 10a.965.965 0 01-.712-.288A.965.965 0 0118 9V7.4l-3.15 3.2zM12 20a.965.965 0 01-.712-.288A.965.965 0 0111 19v-6.6l-5-5V9c0 .283-.096.52-.287.712A.968.968 0 015 10a.968.968 0 01-.713-.288A.967.967 0 014 9V5a.97.97 0 01.287-.713A.97.97 0 015 4h4a.97.97 0 01.713.287A.97.97 0 0110 5a.97.97 0 01-.287.713A.97.97 0 019 6H7.4l5.6 5.6V19c0 .283-.096.52-.287.712A.968.968 0 0112 20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1125">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiSplitDiverge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiSplitDiverge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiSplitDiverge;
