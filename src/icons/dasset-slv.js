import React from 'react';
import PropTypes from 'prop-types';

const DassetSlv = props => {
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
      <path d="M7.526 15.099c-.429 0-.808-.077-1.138-.231a2.378 2.378 0 01-.842-.701l.677-.652c.165.226.357.399.577.52.22.115.468.173.743.173.616 0 .924-.28.924-.841 0-.232-.055-.408-.165-.529-.11-.12-.292-.208-.545-.263l-.503-.1c-.522-.11-.907-.296-1.155-.56-.247-.264-.371-.633-.371-1.106 0-.55.162-.965.487-1.246.33-.28.797-.42 1.402-.42.413 0 .765.068 1.056.206.297.132.55.34.76.627l-.677.635a1.423 1.423 0 00-.487-.429 1.38 1.38 0 00-.668-.149c-.292 0-.506.058-.644.174-.137.115-.206.302-.206.56 0 .215.052.38.157.496.11.115.286.2.528.255l.503.108c.28.06.517.135.71.223.197.088.357.197.478.33.126.131.217.288.272.47.06.176.09.385.09.627 0 .594-.17 1.047-.51 1.361-.336.308-.82.462-1.453.462z"></path>
      <path d="M10.713 15V9.241h1.031v4.86h2.021V15h-3.052z"></path>
      <path d="M15.69 15l-1.691-5.759h1.064l.973 3.565.215 1.27h.115l.215-1.27.965-3.565h1.031L16.911 15H15.69z"></path>
    </svg>
  );
};

DassetSlv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetSlv.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetSlv;
