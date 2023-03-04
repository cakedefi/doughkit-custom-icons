import React from 'react';
import PropTypes from 'prop-types';

const UiReceiptTransactionsActivity = props => {
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
      <g clipPath="url(#clip0_104_1140)">
        <path d="M6 22a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 013 19v-2c0-.283.096-.52.288-.712A.965.965 0 014 16h2V2.725c0-.15.067-.242.2-.275.133-.033.267.017.4.15l.9.9 1.15-1.15a.48.48 0 01.7 0L10.5 3.5l1.15-1.15a.48.48 0 01.7 0L13.5 3.5l1.15-1.15a.48.48 0 01.7 0L16.5 3.5l1.15-1.15a.48.48 0 01.7 0L19.5 3.5l.9-.9c.133-.133.267-.188.4-.163.133.025.2.121.2.288V19c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 0118 22H6zm12-2c.283 0 .52-.096.712-.288A.965.965 0 0019 19V5H8v11h8c.283 0 .52.096.712.288A.965.965 0 0117 17v2c0 .283.096.52.288.712A.965.965 0 0018 20zM12.975 9a.926.926 0 01-.7-.288A.99.99 0 0112 8c0-.283.096-.521.288-.713A.967.967 0 0113 7h4a.97.97 0 01.713.287A.97.97 0 0118 8c0 .283-.096.52-.287.712A.968.968 0 0117 9h-4.025zm0 3a.926.926 0 01-.7-.288A.99.99 0 0112 11c0-.283.096-.521.288-.713A.967.967 0 0113 10h4a.97.97 0 01.713.287A.97.97 0 0118 11c0 .283-.096.52-.287.712A.968.968 0 0117 12h-4.025zM10 9a.965.965 0 01-.712-.288A.965.965 0 019 8c0-.283.096-.521.288-.713A.967.967 0 0110 7c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0110 9zm0 3a.965.965 0 01-.712-.288A.965.965 0 019 11c0-.283.096-.521.288-.713A.967.967 0 0110 10c.283 0 .52.096.712.287.192.192.288.43.288.713s-.096.52-.288.712A.965.965 0 0110 12z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1140">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiReceiptTransactionsActivity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiReceiptTransactionsActivity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiReceiptTransactionsActivity;
