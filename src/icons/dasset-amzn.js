import React from 'react';
import PropTypes from 'prop-types';

const DassetAmzn = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0z"
      ></path>
      <path d="M6.456 14.25l-.29-1.154H4.72l-.29 1.154h-.925l1.337-4.711H6.07l1.337 4.711h-.952zm-.817-3.017l-.148-.817h-.108l-.149.817-.276 1.086h.972l-.29-1.086z"></path>
      <path d="M11.155 11.793l.054-.79h-.108l-.29.75-.783 1.707-.776-1.708-.29-.749h-.109l.054.79v2.457h-.904V9.539h1.012l.642 1.404.35 1.005h.068l.351-1.005.628-1.404h1.006v4.711h-.905v-2.457z"></path>
      <path d="M15.977 14.25h-3.213v-.85l2.045-3.018h-1.937V9.54h3.05v.85l-2.051 3.017h2.106v.844z"></path>
      <path d="M17.927 11.726l-.297-.75h-.108l.054.79v2.484h-.905V9.539h1.053l1.188 2.524.297.75h.108l-.054-.79V9.539h.905v4.711h-1.053l-1.188-2.524z"></path>
    </svg>
  );
};

DassetAmzn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetAmzn.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetAmzn;
