import React from 'react';
import PropTypes from 'prop-types';

const UiContactSupportHelpTicketRequest = props => {
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
      <g clipPath="url(#clip0_104_1147)">
        <path d="M12 22l-.25-3h-.25c-2.367 0-4.375-.825-6.025-2.475C3.825 14.875 3 12.867 3 10.5c0-2.367.825-4.375 2.475-6.025C7.125 2.825 9.133 2 11.5 2c1.183 0 2.287.22 3.312.662a8.6 8.6 0 012.701 1.825 8.588 8.588 0 011.824 2.7A8.279 8.279 0 0120 10.5c0 2.533-.758 4.804-2.275 6.812C16.208 19.321 14.3 20.883 12 22zm-.525-6.025c.283 0 .525-.1.725-.3.2-.2.3-.442.3-.725s-.1-.525-.3-.725c-.2-.2-.442-.3-.725-.3s-.525.1-.725.3c-.2.2-.3.442-.3.725s.1.525.3.725c.2.2.442.3.725.3zM11.5 12.8c.183 0 .35-.067.5-.2a.988.988 0 00.3-.55c.033-.217.125-.413.275-.588.15-.175.408-.445.775-.812.3-.3.55-.625.75-.975.2-.35.3-.725.3-1.125 0-.85-.287-1.488-.862-1.913C12.963 6.212 12.283 6 11.5 6c-.583 0-1.087.133-1.512.4-.425.267-.771.6-1.038 1a.617.617 0 00-.063.575c.075.2.23.342.463.425a.65.65 0 00.5 0c.167-.067.317-.192.45-.375a1.67 1.67 0 01.488-.45c.191-.117.429-.175.712-.175.45 0 .788.125 1.013.375.225.25.337.525.337.825 0 .283-.083.537-.25.762a6.18 6.18 0 01-.6.688c-.467.4-.78.725-.938.975-.158.25-.254.592-.287 1.025-.017.2.046.375.188.525.141.15.32.225.537.225z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1147">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiContactSupportHelpTicketRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiContactSupportHelpTicketRequest.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiContactSupportHelpTicketRequest;
