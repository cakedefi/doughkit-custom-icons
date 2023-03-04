import React from 'react';
import PropTypes from 'prop-types';

const UiBookmarkRibbon = props => {
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
      <path d="M6.4 20.4a.99.99 0 01-.95-.088c-.3-.191-.45-.47-.45-.837V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 017 3h10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14.475c0 .367-.15.646-.45.837a.99.99 0 01-.95.088L12 18l-5.6 2.4z"></path>
    </svg>
  );
};

UiBookmarkRibbon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBookmarkRibbon.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBookmarkRibbon;
