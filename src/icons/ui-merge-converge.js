import React from 'react';
import PropTypes from 'prop-types';

const UiMergeConverge = props => {
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
      <g clipPath="url(#clip0_104_1145)">
        <path d="M6.7 19.3a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7l4.3-4.3V6.875L9.125 8.75a.932.932 0 01-.687.275.974.974 0 01-.713-.3c-.2-.2-.3-.438-.3-.713 0-.275.1-.512.3-.712L11.3 3.725c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.258.02.375.062a.883.883 0 01.325.213l3.625 3.625c.183.183.28.412.288.687a.933.933 0 01-.288.713c-.2.2-.437.3-.712.3a.974.974 0 01-.713-.3L13 6.875V14.4l-4.925 4.925a.918.918 0 01-.675.275.96.96 0 01-.7-.3zm9.2.025l-2.5-2.475 1.425-1.425 2.5 2.525a.918.918 0 01.275.675c0 .267-.1.5-.3.7a.932.932 0 01-.687.275 1.02 1.02 0 01-.713-.275z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1145">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiMergeConverge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiMergeConverge.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiMergeConverge;
