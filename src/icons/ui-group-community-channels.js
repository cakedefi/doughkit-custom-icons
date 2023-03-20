import React from 'react';
import PropTypes from 'prop-types';

const UiGroupCommunityChannels = props => {
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
      <g clipPath="url(#clip0_104_1158)">
        <path d="M2 20a.965.965 0 01-.712-.288A.965.965 0 011 19v-3c0-.55.196-1.021.588-1.413A1.925 1.925 0 013 14h3.275c.333 0 .65.083.95.25.3.167.542.392.725.675a5.156 5.156 0 001.788 1.525c.708.367 1.462.55 2.262.55.817 0 1.58-.183 2.288-.55a4.934 4.934 0 001.762-1.525c.217-.283.47-.508.762-.675.292-.167.596-.25.913-.25H21c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v3c0 .283-.096.52-.288.712A.965.965 0 0122 20h-5a.965.965 0 01-.712-.288A.965.965 0 0116 19v-1.275A6.812 6.812 0 0112 19a6.68 6.68 0 01-2.1-.337A7.045 7.045 0 018 17.7V19c0 .283-.096.52-.287.712A.968.968 0 017 20H2zm10-4a3.876 3.876 0 01-1.8-.438 4.07 4.07 0 01-1.425-1.212 3.16 3.16 0 00-1.062-.987A2.759 2.759 0 006.325 13c.367-.617 1.142-1.104 2.325-1.463C9.833 11.179 10.95 11 12 11c1.05 0 2.167.179 3.35.537 1.183.359 1.958.846 2.325 1.463-.483 0-.942.121-1.375.363-.433.241-.792.57-1.075.987a3.666 3.666 0 01-1.4 1.225A4.025 4.025 0 0112 16zm-8-3a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 011 10c0-.833.292-1.542.875-2.125A2.893 2.893 0 014 7c.833 0 1.542.292 2.125.875S7 9.167 7 10s-.292 1.542-.875 2.125A2.893 2.893 0 014 13zm16 0a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 0117 10c0-.833.292-1.542.875-2.125A2.893 2.893 0 0120 7c.833 0 1.542.292 2.125.875S23 9.167 23 10s-.292 1.542-.875 2.125A2.893 2.893 0 0120 13zm-8-3a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 019 7c0-.833.292-1.542.875-2.125A2.893 2.893 0 0112 4c.833 0 1.542.292 2.125.875S15 6.167 15 7s-.292 1.542-.875 2.125A2.893 2.893 0 0112 10z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1158">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiGroupCommunityChannels.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiGroupCommunityChannels.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiGroupCommunityChannels;