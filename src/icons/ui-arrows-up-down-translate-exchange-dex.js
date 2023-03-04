import React from 'react';
import PropTypes from 'prop-types';

const UiArrowsUpDownTranslateExchangeDex = props => {
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
      <g clipPath="url(#clip0_104_1171)">
        <path d="M14 18.175V12c0-.283.096-.521.288-.713A.967.967 0 0115 11a.97.97 0 01.713.287A.97.97 0 0116 12v6.175l1.875-1.875a.979.979 0 01.687-.288.933.933 0 01.713.288c.2.183.304.412.313.687a.933.933 0 01-.288.713l-3.6 3.6c-.1.1-.208.17-.325.212a1.1 1.1 0 01-.375.063 1.1 1.1 0 01-.375-.063.871.871 0 01-.325-.212l-3.6-3.6a.932.932 0 01-.275-.687c0-.275.1-.513.3-.713.2-.183.433-.28.7-.288.267-.008.5.088.7.288L14 18.175zM8 5.825L6.125 7.7c-.217.217-.458.317-.725.3a1.012 1.012 0 01-.675-.3c-.2-.2-.3-.438-.3-.713 0-.275.092-.504.275-.687l3.6-3.6c.1-.1.208-.171.325-.213.117-.041.242-.062.375-.062s.258.02.375.062A.883.883 0 019.7 2.7l3.6 3.6a.948.948 0 01.275.7.948.948 0 01-.275.7c-.2.2-.437.3-.712.3a.974.974 0 01-.713-.3L10 5.825V12c0 .283-.096.52-.287.712A.968.968 0 019 13a.965.965 0 01-.712-.288A.965.965 0 018 12V5.825z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1171">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiArrowsUpDownTranslateExchangeDex.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiArrowsUpDownTranslateExchangeDex.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiArrowsUpDownTranslateExchangeDex;
