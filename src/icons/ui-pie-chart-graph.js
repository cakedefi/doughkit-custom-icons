import React from 'react';
import PropTypes from 'prop-types';

const UiPieChartGraph = props => {
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
      <g clipPath="url(#clip0_104_1109)">
        <path d="M13 11V2.1c2.383.25 4.396 1.2 6.038 2.85C20.679 6.6 21.633 8.617 21.9 11H13zm-1.975 10.875c-2.533-.25-4.654-1.317-6.362-3.2C2.954 16.792 2.1 14.567 2.1 12c0-2.583.854-4.817 2.563-6.7 1.708-1.883 3.829-2.95 6.362-3.2v19.775zm1.975 0v-8.9h8.9c-.233 2.383-1.18 4.404-2.838 6.063-1.658 1.658-3.679 2.604-6.062 2.837z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1109">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPieChartGraph.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPieChartGraph.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPieChartGraph;
