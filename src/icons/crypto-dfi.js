import React from 'react';
import PropTypes from 'prop-types';

const CryptoDfi = props => {
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
      <g clipPath="url(#clip0_104_4246)">
        <circle cx="12" cy="12" r="12"></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.662 17.59V6.41A5.844 5.844 0 0117.83 12a5.844 5.844 0 01-4.167 5.59zM11.996 4.5v6.321l-.952-.952-.122-2.376.993-2.989a7.463 7.463 0 00-1.84.254l-.48 1.444-1.363-.682a7.523 7.523 0 00-1.48 1.123l2.523 1.263.073 1.446-1.446-.074-1.264-2.521c-.433.443-.809.94-1.123 1.48L6.2 9.599l-1.446.48a7.483 7.483 0 00-.253 1.84l2.99-.993 2.375.121.953.953-.953.953-2.376.12-2.989-.992c.007.636.098 1.252.253 1.84l1.446.48-.684 1.362c.314.54.69 1.037 1.123 1.48l1.264-2.521 1.446-.074-.073 1.445-2.522 1.265c.442.433.94.808 1.48 1.122l1.361-.683.48 1.445a7.481 7.481 0 001.841.254l-.993-2.989.122-2.376.952-.952V19.5a7.5 7.5 0 000-15z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_4246">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CryptoDfi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoDfi.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoDfi;
