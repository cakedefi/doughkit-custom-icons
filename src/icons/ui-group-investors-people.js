import React from 'react';
import PropTypes from 'prop-types';

const UiGroupInvestorsPeople = props => {
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
      <g clipPath="url(#clip0_104_1143)">
        <path d="M2 20a.965.965 0 01-.712-.288A.965.965 0 011 19v-1.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 012.6 14.55a14.866 14.866 0 013.15-1.163A13.776 13.776 0 019 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563V19c0 .283-.096.52-.288.712A.965.965 0 0116 20H2zm16.525 0c.15-.117.267-.263.35-.438.083-.175.125-.37.125-.587V17c0-.733-.204-1.438-.612-2.113-.409-.675-.988-1.254-1.738-1.737.85.1 1.65.27 2.4.512s1.45.538 2.1.888c.6.333 1.058.704 1.375 1.112.317.409.475.855.475 1.338v2c0 .283-.096.52-.288.712A.965.965 0 0122 20h-3.475zM9 12c-1.1 0-2.042-.392-2.825-1.175C5.392 10.042 5 9.1 5 8s.392-2.042 1.175-2.825C6.958 4.392 7.9 4 9 4s2.042.392 2.825 1.175C12.608 5.958 13 6.9 13 8s-.392 2.042-1.175 2.825C11.042 11.608 10.1 12 9 12zm10-4c0 1.1-.392 2.042-1.175 2.825C17.042 11.608 16.1 12 15 12c-.183 0-.417-.02-.7-.062a6.181 6.181 0 01-.7-.138 5.937 5.937 0 001.037-1.775C14.879 9.375 15 8.7 15 8s-.121-1.375-.363-2.025A5.937 5.937 0 0013.6 4.2c.233-.083.467-.138.7-.163.233-.025.467-.037.7-.037 1.1 0 2.042.392 2.825 1.175C18.608 5.958 19 6.9 19 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1143">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiGroupInvestorsPeople.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiGroupInvestorsPeople.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiGroupInvestorsPeople;
