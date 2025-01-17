import React from 'react';
import PropTypes from 'prop-types';

const UiCogSettingsPreferences = props => {
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
      <g clipPath="url(#clip0_104_1103)">
        <path d="M13.875 22h-3.75a.934.934 0 01-.65-.25.997.997 0 01-.325-.625l-.3-2.325a3.771 3.771 0 01-.612-.3 8.194 8.194 0 01-.563-.375l-2.175.9a1.119 1.119 0 01-.7.025.93.93 0 01-.55-.425L2.4 15.4a.94.94 0 01-.125-.7.96.96 0 01.375-.6l1.875-1.425a2.39 2.39 0 01-.025-.338v-.675c0-.108.008-.22.025-.337L2.65 9.9a.96.96 0 01-.375-.6.94.94 0 01.125-.7l1.85-3.225a.788.788 0 01.537-.438c.242-.058.48-.045.713.038l2.175.9c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.3-2.325a.997.997 0 01.325-.625c.183-.167.4-.25.65-.25h3.75c.25 0 .467.083.65.25a.997.997 0 01.325.625l.3 2.325c.217.083.421.183.613.3.191.117.379.242.562.375l2.175-.9c.233-.083.467-.092.7-.025a.93.93 0 01.55.425L21.6 8.6a.94.94 0 01.125.7.96.96 0 01-.375.6l-1.875 1.425c.017.117.025.229.025.337v.675c0 .109-.017.221-.05.338l1.875 1.425c.2.15.325.35.375.6a.94.94 0 01-.125.7l-1.85 3.2a.985.985 0 01-.562.438c-.242.075-.48.07-.713-.013l-2.125-.9a6.842 6.842 0 01-.575.375c-.2.117-.4.217-.6.3l-.3 2.325a.997.997 0 01-.325.625.934.934 0 01-.65.25zm-1.825-6.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0015.55 12c0-.967-.342-1.792-1.025-2.475A3.373 3.373 0 0012.05 8.5c-.983 0-1.813.342-2.488 1.025A3.394 3.394 0 008.55 12c0 .967.337 1.792 1.012 2.475S11.067 15.5 12.05 15.5z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1103">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiCogSettingsPreferences.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiCogSettingsPreferences.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiCogSettingsPreferences;
