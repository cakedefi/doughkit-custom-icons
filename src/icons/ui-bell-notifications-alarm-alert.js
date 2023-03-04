import React from 'react';
import PropTypes from 'prop-types';

const UiBellNotificationsAlarmAlert = props => {
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
      <g clipPath="url(#clip0_104_1105)">
        <path d="M5 19a.968.968 0 01-.713-.288A.967.967 0 014 18c0-.283.096-.52.287-.712A.968.968 0 015 17h1v-7c0-1.383.417-2.613 1.25-3.688.833-1.075 1.917-1.779 3.25-2.112v-.7c0-.417.146-.77.438-1.062A1.444 1.444 0 0112 2c.417 0 .77.146 1.062.438.292.291.438.645.438 1.062v.7c1.333.333 2.417 1.037 3.25 2.112C17.583 7.387 18 8.617 18 10v7h1c.283 0 .52.096.712.288A.965.965 0 0120 18c0 .283-.096.52-.288.712A.965.965 0 0119 19H5zm7 3c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0110 20h4c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0112 22z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1105">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiBellNotificationsAlarmAlert.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBellNotificationsAlarmAlert.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBellNotificationsAlarmAlert;
