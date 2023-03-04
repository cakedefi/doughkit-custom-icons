import React from 'react';
import PropTypes from 'prop-types';

const UiPersonInvestorUser = props => {
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
      <g clipPath="url(#clip0_104_1127)">
        <path d="M12 12c-1.1 0-2.042-.392-2.825-1.175C8.392 10.042 8 9.1 8 8s.392-2.042 1.175-2.825C9.958 4.392 10.9 4 12 4s2.042.392 2.825 1.175C15.608 5.958 16 6.9 16 8s-.392 2.042-1.175 2.825C14.042 11.608 13.1 12 12 12zm-6 8c-.55 0-1.02-.196-1.412-.587A1.927 1.927 0 014 18v-.8c0-.567.146-1.088.438-1.563A2.914 2.914 0 015.6 14.55a14.866 14.866 0 013.15-1.163A13.776 13.776 0 0112 13c1.1 0 2.183.129 3.25.387 1.067.259 2.117.646 3.15 1.163.483.25.87.612 1.162 1.087.292.475.438.996.438 1.563v.8c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0118 20H6z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1127">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiPersonInvestorUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiPersonInvestorUser.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiPersonInvestorUser;
