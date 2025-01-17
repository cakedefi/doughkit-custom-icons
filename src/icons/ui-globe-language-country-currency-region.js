import React from 'react';
import PropTypes from 'prop-types';

const UiGlobeLanguageCountryCurrencyRegion = props => {
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
      <g clipPath="url(#clip0_104_1133)">
        <path d="M12 22a9.671 9.671 0 01-3.875-.788 10.126 10.126 0 01-3.187-2.15 10.125 10.125 0 01-2.15-3.187A9.67 9.67 0 012 12a9.64 9.64 0 01.788-3.887 10.164 10.164 0 012.15-3.175 10.14 10.14 0 013.187-2.151A9.681 9.681 0 0112 2a9.65 9.65 0 013.887.787 10.178 10.178 0 013.175 2.151 10.164 10.164 0 012.15 3.175A9.64 9.64 0 0122 12a9.671 9.671 0 01-.788 3.875 10.125 10.125 0 01-2.15 3.187 10.164 10.164 0 01-3.175 2.15A9.64 9.64 0 0112 22zm0-2.05c.433-.6.808-1.225 1.125-1.875.317-.65.575-1.342.775-2.075h-3.8c.2.733.458 1.425.775 2.075.317.65.692 1.275 1.125 1.875zm-2.6-.4c-.3-.55-.562-1.121-.787-1.713A14.607 14.607 0 018.05 16H5.1a8.304 8.304 0 001.812 2.175A7.2 7.2 0 009.4 19.55zm5.2 0a7.19 7.19 0 002.487-1.375A8.295 8.295 0 0018.9 16h-2.95c-.15.633-.337 1.246-.562 1.837a13.89 13.89 0 01-.788 1.713zM4.25 14h3.4a13.365 13.365 0 01-.15-2 13.365 13.365 0 01.15-2h-3.4A8.012 8.012 0 004 12a8.012 8.012 0 00.25 2zm5.4 0h4.7a13.35 13.35 0 00.15-2 13.35 13.35 0 00-.15-2h-4.7a13.584 13.584 0 00-.15 2 13.018 13.018 0 00.15 2zm6.7 0h3.4a8.018 8.018 0 00.25-2 8.018 8.018 0 00-.25-2h-3.4a13.6 13.6 0 01.15 2 13.033 13.033 0 01-.15 2zm-.4-6h2.95a8.294 8.294 0 00-1.813-2.175A7.19 7.19 0 0014.6 4.45c.3.55.563 1.12.788 1.712.225.592.412 1.205.562 1.838zM10.1 8h3.8c-.2-.733-.458-1.425-.775-2.075A12.701 12.701 0 0012 4.05c-.433.6-.808 1.225-1.125 1.875-.317.65-.575 1.342-.775 2.075zm-5 0h2.95c.15-.633.338-1.246.563-1.838C8.838 5.571 9.1 5 9.4 4.45a7.2 7.2 0 00-2.488 1.375A8.303 8.303 0 005.1 8z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1133">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiGlobeLanguageCountryCurrencyRegion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiGlobeLanguageCountryCurrencyRegion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiGlobeLanguageCountryCurrencyRegion;
