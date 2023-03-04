import React from 'react';
import PropTypes from 'prop-types';

const DassetArkk = props => {
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
      <path d="M6.687 14.25l-.29-1.154H4.952l-.29 1.154h-.925l1.337-4.711h1.228L7.64 14.25h-.952zm-.817-3.017l-.148-.817h-.108l-.149.817-.277 1.086h.972l-.29-1.086z"></path>
      <path d="M9.199 14.25h-.965V9.539h2.038c.423 0 .745.132.965.398.22.265.331.62.331 1.066 0 .347-.065.64-.196.878-.13.238-.324.405-.58.5l.823 1.869H10.57l-.729-1.782H9.2v1.782zm.952-2.585c.13 0 .231-.032.303-.095.077-.067.115-.182.115-.344v-.405c0-.162-.038-.274-.115-.338a.427.427 0 00-.303-.1h-.952v1.282h.952z"></path>
      <path d="M13.866 12.164l-.547.743v1.343h-.966V9.539h.966v1.525l-.04.75h.107l.466-.75 1.026-1.525h1.094l-1.425 1.964 1.546 2.747h-1.134l-1.093-2.086z"></path>
      <path d="M18.117 12.164l-.547.743v1.343h-.965V9.539h.965v1.525l-.04.75h.108l.466-.75 1.026-1.525h1.093L18.8 11.503l1.546 2.747H19.21l-1.094-2.086z"></path>
    </svg>
  );
};

DassetArkk.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetArkk.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetArkk;
