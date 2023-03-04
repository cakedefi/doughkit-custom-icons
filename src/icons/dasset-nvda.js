import React from 'react';
import PropTypes from 'prop-types';

const DassetNvda = props => {
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
      <path d="M5.402 11.726l-.297-.75h-.108l.054.79v2.484h-.904V9.539H5.2l1.188 2.524.297.75h.108l-.054-.79V9.539h.904v4.711H6.59l-1.188-2.524z"></path>
      <path d="M9.569 14.25L8.185 9.539h1L9.94 12.4l.149.973h.108l.148-.973.743-2.861h.972l-1.357 4.711H9.569z"></path>
      <path d="M12.597 9.539h1.654c.288 0 .545.045.77.135.23.085.423.222.58.411.158.19.28.432.365.73.085.296.128.656.128 1.08 0 .422-.043.782-.128 1.08a1.98 1.98 0 01-.365.728 1.417 1.417 0 01-.58.419 2.156 2.156 0 01-.77.128h-1.654V9.539zm1.654 3.867c.545 0 .817-.315.817-.945v-1.134c0-.63-.272-.945-.817-.945h-.688v3.024h.688z"></path>
      <path d="M19.224 14.25l-.29-1.154H17.49l-.29 1.154h-.925l1.336-4.711h1.229l1.336 4.711h-.952zm-.816-3.017l-.149-.817h-.108l-.148.817-.277 1.086h.972l-.29-1.086z"></path>
    </svg>
  );
};

DassetNvda.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetNvda.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetNvda;
