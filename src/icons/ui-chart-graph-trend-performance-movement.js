import React from 'react';
import PropTypes from 'prop-types';

const UiChartGraphTrendPerformanceMovement = props => {
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
      <g clipPath="url(#clip0_104_1108)">
        <path d="M2.725 17.75A1.03 1.03 0 012.4 17c0-.283.108-.533.325-.75l6.05-6.05c.2-.2.433-.3.7-.3.267 0 .5.1.7.3l3.3 3.3 6.4-7.225a.89.89 0 01.713-.325c.291 0 .537.1.737.3a.95.95 0 01.288.662.943.943 0 01-.263.688l-7.175 8.1a.928.928 0 01-.712.338.963.963 0 01-.738-.288l-3.25-3.25-5.25 5.25a1.03 1.03 0 01-.75.325 1.03 1.03 0 01-.75-.325z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1108">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiChartGraphTrendPerformanceMovement.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiChartGraphTrendPerformanceMovement.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiChartGraphTrendPerformanceMovement;
