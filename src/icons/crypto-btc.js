import React from 'react';
import PropTypes from 'prop-types';

const CryptoBtc = props => {
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
      <g clipPath="url(#clip0_104_4244)">
        <path d="M23.64 14.903c-1.602 6.428-8.114 10.34-14.544 8.738C2.669 22.038-1.244 15.527.359 9.098 1.962 2.67 8.473-1.244 14.902.36c6.43 1.603 10.342 8.115 8.739 14.544z"></path>
        <mask
          id="a"
          style="mask-type:luminance"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M23.64 14.903c-1.602 6.428-8.114 10.34-14.544 8.738C2.669 22.038-1.244 15.527.359 9.098 1.962 2.67 8.473-1.244 14.902.36c6.43 1.603 10.342 8.115 8.739 14.544z"></path>
        </mask>
        <g mask="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.22 10.53c.235-1.576-.957-2.423-2.586-2.988l.529-2.135-1.29-.324-.515 2.078c-.34-.085-.688-.165-1.034-.245l.518-2.092-1.289-.324-.529 2.134a42.71 42.71 0 01-.824-.195l.002-.006-1.78-.448-.343 1.388s.957.221.937.235c.523.131.617.48.601.756l-.601 2.432c.036.01.082.023.134.043l-.044-.01a9.353 9.353 0 00-.093-.024l-.843 3.408c-.064.16-.226.4-.592.308.013.02-.937-.235-.937-.235L6 15.773l1.679.422c.187.047.373.096.556.144l.364.095-.534 2.16 1.289.323.528-2.136c.353.096.694.185 1.029.268l-.527 2.127 1.29.324.534-2.155c2.2.419 3.854.25 4.55-1.755.562-1.614-.027-2.544-1.185-3.152.843-.195 1.478-.754 1.648-1.908zm-3.01 4.35c-.341 1.35-2.491.792-3.475.536a17.697 17.697 0 00-.235-.06l.662-2.606c.082.02.183.042.296.067 1.018.224 3.103.684 2.753 2.063zm-2.725-3.931c.974.24 3.1.764 3.47-.606.377-1.402-1.688-1.824-2.697-2.03a13.174 13.174 0 01-.295-.063l-.713 2.642c.067.015.146.035.235.057z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_104_4244">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

CryptoBtc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CryptoBtc.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default CryptoBtc;
