import React from 'react';
import PropTypes from 'prop-types';

const UiMessageChatSpeechBubble = props => {
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
      <g clipPath="url(#clip0_104_1131)">
        <path d="M2 19.575V4c0-.55.196-1.021.588-1.413A1.925 1.925 0 014 2h16c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413v12c0 .55-.196 1.021-.587 1.413A1.928 1.928 0 0120 18H6l-2.3 2.3c-.317.317-.68.387-1.088.212-.408-.175-.612-.487-.612-.937z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1131">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiMessageChatSpeechBubble.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiMessageChatSpeechBubble.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiMessageChatSpeechBubble;
