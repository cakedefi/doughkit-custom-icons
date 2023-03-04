import React from 'react';
import PropTypes from 'prop-types';

const DassetAapl = props => {
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
      <path d="M7.25 14.25l-.29-1.154H5.516l-.29 1.154H4.3l1.336-4.711h1.229l1.336 4.711H7.25zm-.816-3.017l-.149-.817h-.108l-.148.817-.277 1.086h.972l-.29-1.086z"></path>
      <path d="M11.489 14.25l-.29-1.154H9.754l-.29 1.154h-.925l1.337-4.711h1.228l1.337 4.711h-.952zm-.817-3.017l-.148-.817h-.108l-.149.817-.277 1.086h.972l-.29-1.086z"></path>
      <path d="M13.036 14.25V9.539h2.038c.423 0 .745.135.966.405.22.27.33.63.33 1.08 0 .45-.11.81-.33 1.08-.221.27-.543.405-.966.405h-1.073v1.741h-.965zM14 11.665h.952c.13 0 .232-.034.304-.101.076-.068.114-.18.114-.338v-.405c0-.157-.038-.27-.114-.338a.427.427 0 00-.304-.1H14v1.282z"></path>
      <path d="M17.05 14.25V9.539h.965v3.867h1.6v.844H17.05z"></path>
    </svg>
  );
};

DassetAapl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetAapl.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetAapl;
