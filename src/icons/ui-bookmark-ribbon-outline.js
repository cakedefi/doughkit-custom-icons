import React from 'react';
import PropTypes from 'prop-types';

const UiBookmarkRibbonOutline = props => {
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
      <path d="M7 17.95l5-2.15 5 2.15V5H7v12.95zm-.6 2.45a.99.99 0 01-.95-.088c-.3-.191-.45-.47-.45-.837V5c0-.55.196-1.021.588-1.413A1.925 1.925 0 017 3h10c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v14.475c0 .367-.15.646-.45.837a.99.99 0 01-.95.088L12 18l-5.6 2.4zM7 5h10H7z"></path>
    </svg>
  );
};

UiBookmarkRibbonOutline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBookmarkRibbonOutline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBookmarkRibbonOutline;
