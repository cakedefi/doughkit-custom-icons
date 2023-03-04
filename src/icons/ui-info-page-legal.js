import React from 'react';
import PropTypes from 'prop-types';

const UiInfoPageLegal = props => {
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
      <g clipPath="url(#clip0_104_1122)">
        <path d="M19.85 8.06c-.1-.24-.24-.45-.42-.64l-4.85-4.84c-.18-.18-.4-.33-.64-.43-.24-.1-.5-.15-.76-.15H6c-.55 0-1.02.2-1.41.59C4.2 2.98 4 3.45 4 4v16c0 .55.2 1.02.59 1.41.39.39.86.59 1.41.59h12c.55 0 1.02-.2 1.41-.59.39-.39.59-.86.59-1.41V8.83c0-.27-.05-.52-.15-.76v-.01zM13 17c0 .28-.1.52-.29.71-.19.19-.43.29-.71.29-.28 0-.52-.1-.71-.29A.973.973 0 0111 17v-3.5c0-.28.1-.52.29-.71.19-.19.43-.29.71-.29.28 0 .52.1.71.29.19.19.29.43.29.71V17zm-.29-6.79c-.19.19-.43.29-.71.29-.28 0-.52-.1-.71-.29A.973.973 0 0111 9.5c0-.28.1-.52.29-.71.19-.19.43-.29.71-.29.28 0 .52.1.71.29.19.19.29.43.29.71 0 .28-.1.52-.29.71z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1122">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiInfoPageLegal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiInfoPageLegal.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiInfoPageLegal;
