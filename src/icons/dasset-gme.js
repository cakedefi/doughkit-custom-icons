import React from 'react';
import PropTypes from 'prop-types';

const DassetGme = props => {
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
      <path d="M7.683 14.126h-.116c-.044.28-.178.514-.404.7-.225.182-.536.273-.932.273-.666 0-1.177-.256-1.535-.767-.357-.512-.536-1.243-.536-2.195 0-.528.052-.979.157-1.353.11-.38.264-.69.462-.932.198-.248.434-.426.71-.536.28-.116.59-.174.932-.174.517 0 .94.113 1.27.339.33.22.589.539.776.957l-.842.486a1.414 1.414 0 00-.429-.651c-.187-.16-.445-.24-.775-.24-.363 0-.65.119-.858.355-.204.237-.306.575-.306 1.015v1.435c0 .44.102.779.306 1.015.209.237.495.355.858.355.33 0 .605-.088.825-.264.22-.176.33-.429.33-.759v-.42H6.569v-.875h1.988V15h-.874v-.874z"></path>
      <path d="M13.862 11.716l.066-.973h-.116l-.38.94-1.039 2.22-1.03-2.22-.38-.932h-.116l.066.966V15H9.96V9.241h1.13l.858 1.873.42 1.18h.075l.42-1.18.842-1.873h1.13V15h-.973v-3.284z"></path>
      <path d="M16.343 15V9.241h3.456v.9h-2.425v1.501h2.12v.875h-2.12V14.1h2.425V15h-3.456z"></path>
    </svg>
  );
};

DassetGme.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetGme.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetGme;
