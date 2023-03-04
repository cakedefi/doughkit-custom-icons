import React from 'react';
import PropTypes from 'prop-types';

const DassetPltr = props => {
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
      <path d="M5.241 14.25V9.539h2.038c.423 0 .745.135.966.405.22.27.33.63.33 1.08 0 .45-.11.81-.33 1.08-.22.27-.543.405-.966.405H6.206v1.741h-.965zm.965-2.585h.952c.13 0 .232-.034.304-.101.076-.068.114-.18.114-.338v-.405c0-.157-.038-.27-.114-.338a.427.427 0 00-.304-.1h-.952v1.282z"></path>
      <path d="M9.255 14.25V9.539h.966v3.867h1.6v.844H9.254z"></path>
      <path d="M13.8 10.382v3.868h-.965v-3.868h-1.128V9.54h3.22v.843H13.8z"></path>
      <path d="M16.522 14.25h-.965V9.539h2.039c.423 0 .744.132.965.398.22.265.33.62.33 1.066 0 .347-.065.64-.195.878s-.324.405-.58.5l.823 1.869h-1.046l-.73-1.782h-.64v1.782zm.952-2.585c.13 0 .232-.032.304-.095.076-.067.115-.182.115-.344v-.405c0-.162-.039-.274-.115-.338a.427.427 0 00-.304-.1h-.952v1.282h.952z"></path>
    </svg>
  );
};

DassetPltr.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetPltr.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetPltr;
