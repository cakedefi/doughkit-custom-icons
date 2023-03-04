import React from 'react';
import PropTypes from 'prop-types';

const DassetGeneric = props => {
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
      <path d="M9 8.25h2.857c.51 0 .972.082 1.384.248.42.165.777.412 1.069.742.3.322.529.731.686 1.226.165.488.248 1.058.248 1.71 0 .653-.083 1.226-.248 1.722a3.304 3.304 0 01-.686 1.226 2.805 2.805 0 01-1.069.731 3.697 3.697 0 01-1.383.247H9V8.25zm2.857 6.536c.556 0 .994-.161 1.317-.483.33-.33.495-.833.495-1.508v-1.238c0-.675-.165-1.173-.495-1.496-.323-.33-.761-.495-1.316-.495h-1.373v5.22h1.373z"></path>
    </svg>
  );
};

DassetGeneric.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetGeneric.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetGeneric;
