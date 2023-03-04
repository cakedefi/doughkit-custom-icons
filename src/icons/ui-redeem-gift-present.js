import React from 'react';
import PropTypes from 'prop-types';

const UiRedeemGiftPresent = props => {
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
      <g clipPath="url(#clip0_104_1114)">
        <path d="M4 17v2h16v-2H4zm0 4c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 012 19V8c0-.55.196-1.02.588-1.412A1.923 1.923 0 014 6h2.2a1.406 1.406 0 01-.163-.475A3.585 3.585 0 016 5c0-.833.292-1.542.875-2.125A2.893 2.893 0 019 2c.5 0 .962.129 1.387.387.425.259.796.58 1.113.963L12 4l.5-.65c.3-.4.667-.725 1.1-.975.433-.25.9-.375 1.4-.375.833 0 1.542.292 2.125.875S18 4.167 18 5c0 .183-.013.358-.038.525A1.391 1.391 0 0117.8 6H20c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v11c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 21H4zm0-7h16V8h-5.1l1.525 2.075c.15.2.196.429.137.687a1.33 1.33 0 01-.362.663.875.875 0 01-.725.175 1.035 1.035 0 01-.65-.4L12 7.4l-2.825 3.825a1.05 1.05 0 01-.687.412.758.758 0 01-.688-.212.955.955 0 01-.412-.65.911.911 0 01.187-.725L9.05 8H4v6zm5-8a.97.97 0 00.713-.287A.97.97 0 0010 5a.97.97 0 00-.287-.713A.97.97 0 009 4a.967.967 0 00-.712.287A.968.968 0 008 5c0 .283.096.521.288.713A.967.967 0 009 6zm6 0a.97.97 0 00.713-.287A.97.97 0 0016 5a.97.97 0 00-.287-.713A.97.97 0 0015 4a.967.967 0 00-.712.287A.968.968 0 0014 5c0 .283.096.521.288.713A.967.967 0 0015 6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1114">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiRedeemGiftPresent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiRedeemGiftPresent.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiRedeemGiftPresent;
