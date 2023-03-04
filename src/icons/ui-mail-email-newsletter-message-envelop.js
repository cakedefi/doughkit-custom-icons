import React from 'react';
import PropTypes from 'prop-types';

const UiMailEmailNewsletterMessageEnvelop = props => {
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
      <g clipPath="url(#clip0_104_1118)">
        <path d="M4 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 012 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 014 4h16c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 20H4zM20 8l-7.475 4.675c-.083.05-.171.087-.263.112a.981.981 0 01-.262.038.981.981 0 01-.262-.038 1.026 1.026 0 01-.263-.112L4 8v10h16V8zm-8 3l8-5H4l8 5zM4 8.25V6.775 6.8v-.013V8.25z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1118">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiMailEmailNewsletterMessageEnvelop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiMailEmailNewsletterMessageEnvelop.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiMailEmailNewsletterMessageEnvelop;
