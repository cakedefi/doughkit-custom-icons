import React from 'react';
import PropTypes from 'prop-types';

const UiTrashDeleteRemove = props => {
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
      <g clipPath="url(#clip0_104_1137)">
        <path d="M7 21c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 015 19V6a.97.97 0 01-.713-.287A.97.97 0 014 5a.97.97 0 01.287-.713A.97.97 0 015 4h4c0-.283.096-.521.288-.713A.967.967 0 0110 3h4a.97.97 0 01.713.287A.97.97 0 0115 4h4c.283 0 .52.096.712.287.192.192.288.43.288.713a.968.968 0 01-.288.713A.967.967 0 0119 6v13c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0117 21H7zm2-5c0 .283.096.52.288.712A.965.965 0 0010 17a.968.968 0 00.713-.288A.967.967 0 0011 16V9a.97.97 0 00-.287-.713A.97.97 0 0010 8a.967.967 0 00-.712.287A.968.968 0 009 9v7zm4 0c0 .283.096.52.288.712A.965.965 0 0014 17a.968.968 0 00.713-.288A.967.967 0 0015 16V9a.97.97 0 00-.287-.713A.97.97 0 0014 8a.967.967 0 00-.712.287A.968.968 0 0013 9v7z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1137">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiTrashDeleteRemove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiTrashDeleteRemove.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiTrashDeleteRemove;
