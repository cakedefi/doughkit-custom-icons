import React from 'react';
import PropTypes from 'prop-types';

const UiSquareBarChartGraphInsightsPerformance = props => {
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
      <g clipPath="url(#clip0_104_1130)">
        <path d="M6 20c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 18v-7c0-.55.196-1.021.588-1.413A1.925 1.925 0 016 9c.55 0 1.02.196 1.412.587C7.804 9.979 8 10.45 8 11v7c0 .55-.196 1.021-.588 1.413A1.925 1.925 0 016 20zm6 0c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 0110 18V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0112 4c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0112 20zm6 0c-.55 0-1.021-.196-1.413-.587A1.928 1.928 0 0116 18v-3c0-.55.196-1.021.587-1.413A1.928 1.928 0 0118 13c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v3c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 20z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1130">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiSquareBarChartGraphInsightsPerformance.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiSquareBarChartGraphInsightsPerformance.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiSquareBarChartGraphInsightsPerformance;
