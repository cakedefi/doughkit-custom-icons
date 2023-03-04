import React from 'react';
import PropTypes from 'prop-types';

const DassetGld = props => {
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
      <path
        d="M8.44 14.126h-.115a1.11 1.11 0 01-.405.7c-.225.182-.536.273-.932.273-.665 0-1.177-.256-1.534-.767-.358-.512-.537-1.243-.537-2.195 0-.528.053-.979.157-1.353.11-.38.264-.69.462-.932.198-.248.435-.426.71-.536.28-.116.59-.174.932-.174.517 0 .94.113 1.27.339.33.22.589.539.776.957l-.842.486a1.413 1.413 0 00-.429-.651c-.187-.16-.445-.24-.775-.24-.363 0-.65.119-.858.355-.204.237-.305.575-.305 1.015v1.435c0 .44.101.779.305 1.015.209.237.495.355.858.355.33 0 .605-.088.825-.264.22-.176.33-.429.33-.759v-.42H7.326v-.875h1.989V15H8.44v-.874z"
        fillOpacity=".6"
      ></path>
      <path
        d="M10.717 15V9.242h1.031V14.1h2.022V15h-3.053z"
        fillOpacity=".6"
      ></path>
      <path
        d="M14.916 9.242h1.964c.346 0 .654.054.924.164.275.105.506.275.693.512.192.231.338.528.437.891.1.363.149.8.149 1.312 0 .511-.05.948-.149 1.311a2.41 2.41 0 01-.437.9 1.68 1.68 0 01-.693.511c-.27.105-.578.157-.924.157h-1.964V9.242zM16.88 14.1c.352 0 .624-.108.817-.322.192-.22.288-.547.288-.982v-1.353c0-.434-.096-.759-.288-.973-.193-.22-.465-.33-.817-.33h-.932v3.96h.932z"
        fillOpacity=".6"
      ></path>
    </svg>
  );
};

DassetGld.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetGld.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetGld;
