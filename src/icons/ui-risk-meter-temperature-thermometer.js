import React from 'react';
import PropTypes from 'prop-types';

const UiRiskMeterTemperatureThermometer = props => {
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
      <g clipPath="url(#clip0_104_1106)">
        <path d="M12 21c-1.383 0-2.562-.487-3.537-1.462C7.488 18.563 7 17.383 7 16c0-.8.175-1.546.525-2.238A5.083 5.083 0 019 12V6c0-.833.292-1.542.875-2.125A2.893 2.893 0 0112 3c.833 0 1.542.292 2.125.875S15 5.167 15 6v6a5.084 5.084 0 011.475 1.762c.35.692.525 1.438.525 2.238 0 1.383-.487 2.563-1.462 3.538C14.563 20.513 13.383 21 12 21zm-1-11h2V6a.97.97 0 00-.287-.713A.97.97 0 0012 5a.967.967 0 00-.712.287A.968.968 0 0011 6v4z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1106">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiRiskMeterTemperatureThermometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiRiskMeterTemperatureThermometer.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiRiskMeterTemperatureThermometer;
