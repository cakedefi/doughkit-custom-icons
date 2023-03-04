import React from 'react';
import PropTypes from 'prop-types';

const CryptoUsdt = props => {
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
      <circle cx="12" cy="12" r="12"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.441 8.57v1.775c3.295.152 5.771.805 5.771 1.587 0 .783-2.476 1.436-5.77 1.588v5.688h-2.935V13.52c-3.3-.152-5.782-.806-5.782-1.589 0-.783 2.482-1.437 5.782-1.588V8.57h-4.06V5.864h11.055V8.57h-4.06zm0 4.466v.001c2.91-.129 5.082-.635 5.082-1.243 0-.606-2.171-1.113-5.082-1.243v1.982c-.084.008-.538.045-1.443.045-.755 0-1.3-.032-1.491-.045V10.55c-2.916.13-5.093.638-5.093 1.244 0 .608 2.177 1.116 5.093 1.244v-.002c.187.009.72.031 1.478.031.949 0 1.374-.025 1.457-.031z"
      ></path>
    </svg>
  );
};

CryptoUsdt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoUsdt.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoUsdt;
