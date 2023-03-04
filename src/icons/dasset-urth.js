import React from 'react';
import PropTypes from 'prop-types';

const DassetUrth = props => {
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
      <path d="M5.27 9.539v3.057c0 .31.051.536.155.675.108.135.3.203.574.203.274 0 .463-.068.567-.203.108-.14.162-.364.162-.675V9.54h.965v2.929c0 .333-.03.617-.088.85a1.359 1.359 0 01-.29.581c-.13.149-.304.259-.52.33a2.701 2.701 0 01-.796.102c-.315 0-.58-.034-.797-.101a1.214 1.214 0 01-.526-.331 1.404 1.404 0 01-.284-.58 3.555 3.555 0 01-.088-.851v-2.93h.966z"></path>
      <path d="M9.548 14.25h-.965V9.539h2.038c.423 0 .745.132.966.398.22.265.33.62.33 1.066 0 .347-.065.64-.195.878s-.324.405-.58.5l.823 1.869h-1.046l-.73-1.782h-.64v1.782zm.952-2.585c.13 0 .232-.032.304-.095.076-.067.114-.182.114-.344v-.405c0-.162-.038-.274-.114-.338a.427.427 0 00-.304-.1h-.952v1.282h.952z"></path>
      <path d="M14.413 10.382v3.868h-.965v-3.868H12.32V9.54h3.22v.843h-1.127z"></path>
      <path d="M18.701 12.286h-1.566v1.964h-.965V9.539h.965v1.91h1.566v-1.91h.966v4.711H18.7v-1.964z"></path>
    </svg>
  );
};

DassetUrth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetUrth.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetUrth;
