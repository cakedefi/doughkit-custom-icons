import React from 'react';
import PropTypes from 'prop-types';

const UiTimePendingRecentActivity = props => {
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
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM16 16a.994.994 0 01-1.41 0l-3.29-3.29A1 1 0 0111 12V8c0-.55.45-1 1-1s1 .45 1 1v3.59l3 3c.39.39.39 1.02 0 1.41z"></path>
    </svg>
  );
};

UiTimePendingRecentActivity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiTimePendingRecentActivity.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiTimePendingRecentActivity;
