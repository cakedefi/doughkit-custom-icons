import React from 'react';
import PropTypes from 'prop-types';

const UiUpArrowAscendingWithdraw = props => {
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
      <g clipPath="url(#clip0_104_1169)">
        <path d="M12 20a.965.965 0 01-.712-.288A.965.965 0 0111 19V7.825L6.125 12.7c-.2.2-.438.3-.713.3a.973.973 0 01-.712-.3.96.96 0 01-.3-.7c0-.267.1-.5.3-.7l6.6-6.6c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.263.02.388.062a.681.681 0 01.312.213l6.6 6.6c.2.2.3.433.3.7 0 .267-.1.5-.3.7-.2.2-.438.3-.713.3a.973.973 0 01-.712-.3L13 7.825V19c0 .283-.096.52-.287.712A.968.968 0 0112 20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1169">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiUpArrowAscendingWithdraw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiUpArrowAscendingWithdraw.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiUpArrowAscendingWithdraw;
