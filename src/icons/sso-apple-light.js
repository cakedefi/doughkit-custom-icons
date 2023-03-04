import React from 'react';
import PropTypes from 'prop-types';

const SsoAppleLight = props => {
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
      <g clipPath="url(#clip0_104_1249)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.323 5.247c.652-.842 1.147-2.032.968-3.247-1.066.074-2.312.756-3.04 1.645-.662.806-1.207 2.004-.994 3.167 1.165.036 2.368-.662 3.066-1.565zm5.76 11.427c-.466 1.04-.69 1.504-1.291 2.425-.838 1.285-2.02 2.885-3.486 2.897-1.301.014-1.636-.852-3.403-.842-1.766.01-2.134.859-3.438.846-1.464-.013-2.584-1.457-3.422-2.743-2.345-3.591-2.592-7.807-1.146-10.05 1.029-1.592 2.651-2.523 4.176-2.523 1.55 0 2.527.856 3.811.856 1.247 0 2.005-.859 3.8-.859 1.358 0 2.797.745 3.82 2.029-3.356 1.85-2.813 6.674.58 7.964z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1249">
          <rect width="17.083" height="20" transform="translate(3 2)"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SsoAppleLight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SsoAppleLight.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default SsoAppleLight;
