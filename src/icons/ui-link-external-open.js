import React from 'react';
import PropTypes from 'prop-types';

const UiLinkExternalOpen = props => {
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
      <g clipPath="url(#clip0_104_1159)">
        <path d="M5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h6a.97.97 0 01.713.287A.97.97 0 0112 4c0 .283-.096.52-.287.712A.968.968 0 0111 5H5v14h14v-6c0-.283.096-.521.288-.713A.967.967 0 0120 12c.283 0 .52.096.712.287.192.192.288.43.288.713v6c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0119 21H5zm4-6a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7L17.6 5H15a.965.965 0 01-.712-.288A.965.965 0 0114 4c0-.283.096-.521.288-.713A.967.967 0 0115 3h5c.283 0 .52.096.712.287.192.192.288.43.288.713v5c0 .283-.096.52-.288.712A.965.965 0 0120 10a.965.965 0 01-.712-.288A.965.965 0 0119 9V6.4l-8.625 8.625a.918.918 0 01-.675.275.96.96 0 01-.7-.3z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1159">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiLinkExternalOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiLinkExternalOpen.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiLinkExternalOpen;
