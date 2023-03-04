import React from 'react';
import PropTypes from 'prop-types';

const UiListCheckAddressWhitelist = props => {
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
      <g clipPath="url(#clip0_104_1135)">
        <path d="M6 9h3a.968.968 0 00.713-.288A.967.967 0 0010 8a.97.97 0 00-.287-.713A.97.97 0 009 7H6a.97.97 0 00-.713.287A.97.97 0 005 8c0 .283.096.52.287.712.192.192.43.288.713.288zm0 4h3a.968.968 0 00.713-.288A.967.967 0 0010 12a.97.97 0 00-.287-.713A.97.97 0 009 11H6a.97.97 0 00-.713.287A.97.97 0 005 12c0 .283.096.52.287.712.192.192.43.288.713.288zm0 4h3a.968.968 0 00.713-.288A.967.967 0 0010 16a.97.97 0 00-.287-.713A.97.97 0 009 15H6a.97.97 0 00-.713.287A.97.97 0 005 16c0 .283.096.52.287.712.192.192.43.288.713.288zm8.55-2.425a1.1 1.1 0 00.375-.063.871.871 0 00.325-.212l3.55-3.55c.217-.217.321-.454.313-.713a.995.995 0 00-.313-.687c-.2-.2-.438-.3-.713-.3-.275 0-.512.1-.712.3l-2.825 2.825-.725-.725a.918.918 0 00-.7-.288c-.267.009-.5.113-.7.313-.183.2-.28.433-.288.7-.008.267.088.5.288.7L13.85 14.3c.1.1.208.17.325.212a1.1 1.1 0 00.375.063zM4 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 012 19V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 014 3h16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 21H4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1135">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiListCheckAddressWhitelist.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiListCheckAddressWhitelist.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiListCheckAddressWhitelist;
