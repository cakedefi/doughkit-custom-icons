import React from 'react';
import PropTypes from 'prop-types';

const UiPaybackBorrowLessHandCoin = props => {
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
      <g clipPath="url(#clip0_104_1099)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 12c-1.383 0-2.562-.487-3.537-1.462C12.488 9.563 12 8.383 12 7s.488-2.563 1.463-3.538C14.438 2.487 15.617 2 17 2s2.563.487 3.538 1.462C21.513 4.437 22 5.617 22 7s-.487 2.563-1.462 3.538C19.563 11.513 18.383 12 17 12zm-2.5-5.5a.5.5 0 000 1h5a.5.5 0 000-1h-5z"
        ></path>
        <path d="M1 20v-7c0-.55.196-1.021.588-1.413A1.925 1.925 0 013 11c.55 0 1.02.196 1.412.587.392.392.588.863.588 1.413v7c0 .55-.196 1.021-.588 1.413A1.925 1.925 0 013 22c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 011 20z"></path>
        <path d="M13.375 21.825L7 20.025V11h1.6c.117 0 .233.012.35.037.117.025.233.055.35.088l6.925 2.575c.233.083.421.233.563.45.141.217.212.442.212.675 0 .35-.12.633-.362.85A1.219 1.219 0 0115.8 16h-2.625c-.083 0-.146-.004-.187-.012a.714.714 0 01-.163-.063L11.7 15.5a.481.481 0 00-.4.025.447.447 0 00-.25.275.575.575 0 00.025.375c.05.117.142.2.275.25l1.475.525c.033.017.083.03.15.038.067.008.125.012.175.012H20c.533 0 1 .192 1.4.575.4.383.6.858.6 1.425l-7.375 2.775a1.819 1.819 0 01-.613.112 2.136 2.136 0 01-.637-.062z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1099">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPaybackBorrowLessHandCoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPaybackBorrowLessHandCoin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPaybackBorrowLessHandCoin;
