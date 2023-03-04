import React from 'react';
import PropTypes from 'prop-types';

const UiDownloadExport = props => {
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
      <g clipPath="url(#clip0_104_1136)">
        <path d="M12 15.575a1.1 1.1 0 01-.375-.063.871.871 0 01-.325-.212l-3.6-3.6a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7.183-.183.42-.28.712-.288.292-.008.53.08.713.263L11 12.15V5c0-.283.096-.521.288-.713A.967.967 0 0112 4a.97.97 0 01.713.287A.97.97 0 0113 5v7.15l1.875-1.875c.183-.183.421-.271.713-.263.291.009.529.105.712.288a.948.948 0 01.275.7.948.948 0 01-.275.7l-3.6 3.6c-.1.1-.208.17-.325.212a1.1 1.1 0 01-.375.063zM6 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 18v-2a.97.97 0 01.287-.713A.97.97 0 015 15a.97.97 0 01.713.287A.97.97 0 016 16v2h12v-2c0-.283.096-.521.288-.713A.967.967 0 0119 15c.283 0 .52.096.712.287.192.192.288.43.288.713v2c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 20H6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1136">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDownloadExport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDownloadExport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDownloadExport;
