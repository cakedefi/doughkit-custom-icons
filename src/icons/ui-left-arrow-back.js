import React from 'react';
import PropTypes from 'prop-types';

const UiLeftArrowBack = props => {
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
      <g clipPath="url(#clip0_104_1164)">
        <path d="M10.875 19.3l-6.6-6.6a.883.883 0 01-.213-.325A1.115 1.115 0 014 12c0-.133.02-.258.062-.375a.883.883 0 01.213-.325l6.6-6.6a.978.978 0 01.687-.288.933.933 0 01.713.288c.2.183.304.412.313.687a.933.933 0 01-.288.713L7.4 11h11.175a.97.97 0 01.713.287.97.97 0 01.287.713c0 .283-.096.52-.287.712a.968.968 0 01-.713.288H7.4l4.9 4.9c.183.183.28.417.288.7a.872.872 0 01-.288.7c-.183.2-.417.3-.7.3a.988.988 0 01-.725-.3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1164">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiLeftArrowBack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiLeftArrowBack.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiLeftArrowBack;
