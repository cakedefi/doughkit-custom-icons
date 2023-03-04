import React from 'react';
import PropTypes from 'prop-types';

const UiArrowsRightLeftSwapExchangeDex = props => {
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
      <g clipPath="url(#clip0_104_1162)">
        <path d="M16.3 13.275a.948.948 0 01-.275-.7c0-.283.092-.517.275-.7L18.175 10H12a.965.965 0 01-.712-.288A.965.965 0 0111 9c0-.283.096-.521.288-.713A.967.967 0 0112 8h6.175L16.3 6.125c-.183-.183-.275-.421-.275-.713 0-.291.092-.529.275-.712a.948.948 0 01.7-.275c.283 0 .517.092.7.275l3.6 3.6c.1.1.171.208.213.325.041.117.062.242.062.375s-.02.258-.062.375a.883.883 0 01-.213.325l-3.6 3.6a.906.906 0 01-.7.262.99.99 0 01-.7-.287zM6.3 19.3l-3.6-3.6a.871.871 0 01-.212-.325A1.1 1.1 0 012.425 15a1.1 1.1 0 01.063-.375.871.871 0 01.212-.325l3.6-3.6a.948.948 0 01.7-.275c.283 0 .517.092.7.275.183.183.275.42.275.712s-.092.53-.275.713L5.825 14H12a.97.97 0 01.713.287A.97.97 0 0113 15c0 .283-.096.52-.287.712A.968.968 0 0112 16H5.825L7.7 17.875a.948.948 0 01.275.7.948.948 0 01-.275.7.99.99 0 01-.7.287.906.906 0 01-.7-.262z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1162">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiArrowsRightLeftSwapExchangeDex.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiArrowsRightLeftSwapExchangeDex.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiArrowsRightLeftSwapExchangeDex;
