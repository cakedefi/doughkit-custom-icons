import React from 'react';
import PropTypes from 'prop-types';

const UiBackspace = props => {
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
      <path d="M9.025 19c-.333 0-.646-.075-.937-.225a1.91 1.91 0 01-.713-.625l-3.525-5A1.936 1.936 0 013.475 12c0-.417.125-.8.375-1.15l3.525-5a1.91 1.91 0 01.713-.625c.291-.15.604-.225.937-.225h10c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v10c0 .55-.196 1.021-.587 1.413a1.928 1.928 0 01-1.413.587h-10zm1.675-3.7a.948.948 0 00.7.275.949.949 0 00.7-.275l1.9-1.9 1.9 1.9a.948.948 0 00.7.275.949.949 0 00.7-.275.948.948 0 00.275-.7.948.948 0 00-.275-.7L15.4 12l1.9-1.9a.948.948 0 00.275-.7.948.948 0 00-.275-.7.948.948 0 00-.7-.275.948.948 0 00-.7.275L14 10.6l-1.9-1.9a.948.948 0 00-.7-.275.948.948 0 00-.7.275.948.948 0 00-.275.7c0 .283.092.517.275.7l1.9 1.9-1.9 1.9a.948.948 0 00-.275.7c0 .283.092.517.275.7z"></path>
    </svg>
  );
};

UiBackspace.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBackspace.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBackspace;
