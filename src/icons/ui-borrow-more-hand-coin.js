import React from 'react';
import PropTypes from 'prop-types';

const UiBorrowMoreHandCoin = props => {
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
      <g clipPath="url(#clip0_104_1098)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.463 10.538C14.438 11.513 15.617 12 17 12s2.563-.487 3.538-1.462C21.513 9.563 22 8.383 22 7s-.487-2.563-1.462-3.538C19.563 2.487 18.383 2 17 2s-2.562.487-3.537 1.462C12.488 4.437 12 5.617 12 7s.488 2.563 1.463 3.538zm3.887-.688a.48.48 0 01-.7 0 .48.48 0 01-.15-.35v-2h-2a.48.48 0 01-.35-.15.48.48 0 010-.7c.1-.1.217-.15.35-.15h2v-2c0-.133.05-.25.15-.35a.48.48 0 01.7 0c.1.1.15.217.15.35v2h2c.133 0 .25.05.35.15a.48.48 0 010 .7.48.48 0 01-.35.15h-2v2a.48.48 0 01-.15.35zM1 13v7c0 .55.196 1.021.588 1.413.391.391.862.587 1.412.587.55 0 1.02-.196 1.412-.587C4.804 21.021 5 20.55 5 20v-7c0-.55-.196-1.021-.588-1.413A1.925 1.925 0 003 11c-.55 0-1.02.196-1.412.587A1.927 1.927 0 001 13zm6 7.025l6.375 1.8c.183.05.396.07.637.062.242-.008.446-.045.613-.112L22 19c0-.567-.2-1.042-.6-1.425A1.96 1.96 0 0020 17h-6.85c-.05 0-.108-.004-.175-.012a.492.492 0 01-.15-.038l-1.475-.525a.456.456 0 01-.275-.25.575.575 0 01-.025-.375.447.447 0 01.25-.275.481.481 0 01.4-.025l1.125.425a.714.714 0 00.163.063c.041.008.104.012.187.012H15.8c.317 0 .596-.108.838-.325.241-.217.362-.5.362-.85 0-.233-.07-.458-.212-.675a1.104 1.104 0 00-.563-.45L9.3 11.125a5.597 5.597 0 00-.35-.088A1.686 1.686 0 008.6 11H7v9.025z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1098">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiBorrowMoreHandCoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBorrowMoreHandCoin.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBorrowMoreHandCoin;
