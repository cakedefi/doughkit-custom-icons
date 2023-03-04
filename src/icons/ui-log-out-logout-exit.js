import React from 'react';
import PropTypes from 'prop-types';

const UiLogOutLogoutExit = props => {
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
      <g clipPath="url(#clip0_104_1174)">
        <path d="M15.325 16.275a1.112 1.112 0 01-.275-.738c0-.275.092-.504.275-.687l1.85-1.85H10a.965.965 0 01-.712-.288A.965.965 0 019 12c0-.283.096-.521.288-.713A.967.967 0 0110 11h7.175l-1.85-1.85c-.2-.2-.3-.437-.3-.712 0-.275.1-.513.3-.713.183-.2.413-.3.688-.3.275 0 .504.092.687.275l3.6 3.6c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 01-.213.325l-3.6 3.6c-.217.217-.454.312-.712.287a1.052 1.052 0 01-.663-.312zM5 21c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 013 19V5c0-.55.196-1.021.587-1.413A1.928 1.928 0 015 3h6a.97.97 0 01.713.287A.97.97 0 0112 4c0 .283-.096.52-.287.712A.968.968 0 0111 5H5v14h6c.283 0 .521.096.713.288A.967.967 0 0112 20c0 .283-.096.52-.287.712A.968.968 0 0111 21H5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1174">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiLogOutLogoutExit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiLogOutLogoutExit.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiLogOutLogoutExit;
