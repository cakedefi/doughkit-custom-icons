import React from 'react';
import PropTypes from 'prop-types';

const UiShare = props => {
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
      <g clipPath="url(#clip0_104_1142)">
        <path d="M12 16a.965.965 0 01-.712-.288A.965.965 0 0111 15V4.825l-.9.9A.932.932 0 019.413 6a.974.974 0 01-.713-.3 1.02 1.02 0 01-.275-.713c0-.275.092-.504.275-.687l2.6-2.6a1.03 1.03 0 011.088-.2c.125.05.229.117.312.2l2.6 2.6c.2.2.3.442.3.725s-.1.517-.3.7c-.2.183-.437.275-.712.275a.933.933 0 01-.688-.275l-.9-.9V15c0 .283-.096.52-.287.712A.968.968 0 0112 16zm-6 7c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 21V10c0-.55.196-1.021.588-1.413A1.925 1.925 0 016 8h2a.97.97 0 01.713.287A.97.97 0 019 9c0 .283-.096.52-.287.712A.968.968 0 018 10H6v11h12V10h-2a.965.965 0 01-.712-.288A.965.965 0 0115 9c0-.283.096-.521.288-.713A.967.967 0 0116 8h2c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v11c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 23H6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1142">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiShare.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiShare;
