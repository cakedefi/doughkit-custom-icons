import React from 'react';
import PropTypes from 'prop-types';

const UiPhoneCall = props => {
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
      <g clipPath="url(#clip0_104_1126)">
        <path d="M4.05 21c-.3 0-.55-.1-.75-.3-.2-.2-.3-.45-.3-.75V15.9c0-.233.075-.438.225-.613.15-.175.342-.287.575-.337l3.45-.7c.233-.033.471-.013.713.062.241.075.437.188.587.338L10.9 17a18.293 18.293 0 003.475-2.725A16.607 16.607 0 0017 10.9l-2.4-2.45a1.027 1.027 0 01-.288-.513A1.805 1.805 0 0114.3 7.3l.65-3.5a.88.88 0 01.325-.575A.96.96 0 0115.9 3h4.05c.3 0 .55.1.75.3.2.2.3.45.3.75 0 2.15-.48 4.246-1.438 6.287a19.046 19.046 0 01-3.8 5.425 19.05 19.05 0 01-5.424 3.8C8.296 20.521 6.2 21 4.05 21z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1126">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPhoneCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPhoneCall.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPhoneCall;
