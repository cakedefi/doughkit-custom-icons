import React from 'react';
import PropTypes from 'prop-types';

const UiGroupReferReferralFriends = props => {
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
      <g clipPath="url(#clip0_104_1175)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 11c.977 0 1.858-.23 2.642-.688A5.179 5.179 0 0016.5 8.5a6.798 6.798 0 00-2.067-1.113A7.584 7.584 0 0012 7c-.855 0-1.666.129-2.433.387A6.798 6.798 0 007.5 8.5a5.179 5.179 0 001.858 1.812c.784.459 1.665.688 2.642.688zm0-5c.576 0 1.069-.196 1.479-.588.41-.391.614-.862.614-1.412 0-.55-.205-1.02-.614-1.412A2.064 2.064 0 0012 2a2.06 2.06 0 00-1.478.588c-.41.391-.615.862-.615 1.412 0 .55.205 1.02.615 1.412.41.392.902.588 1.478.588zm5.5 15c.977 0 1.858-.23 2.642-.688A5.179 5.179 0 0022 18.5a6.8 6.8 0 00-2.067-1.113A7.584 7.584 0 0017.5 17c-.855 0-1.666.129-2.433.387A6.8 6.8 0 0013 18.5a5.179 5.179 0 001.858 1.812c.784.459 1.665.688 2.642.688zm0-5c.576 0 1.069-.196 1.479-.588.41-.391.614-.862.614-1.412 0-.55-.205-1.02-.614-1.412A2.064 2.064 0 0017.5 12a2.06 2.06 0 00-1.478.588c-.41.391-.615.862-.615 1.412 0 .55.205 1.02.615 1.412.41.392.902.588 1.478.588zm-8.358 4.312C8.358 20.771 7.477 21 6.5 21c-.977 0-1.858-.23-2.642-.688A5.179 5.179 0 012 18.5a6.8 6.8 0 012.067-1.113A7.585 7.585 0 016.5 17c.855 0 1.666.129 2.433.387A6.8 6.8 0 0111 18.5a5.179 5.179 0 01-1.858 1.812zm-1.163-4.9c-.41.392-.903.588-1.479.588a2.06 2.06 0 01-1.478-.588A1.882 1.882 0 014.407 14c0-.55.205-1.02.615-1.412A2.06 2.06 0 016.5 12c.576 0 1.068.196 1.479.588.41.391.614.862.614 1.412 0 .55-.205 1.02-.614 1.412z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1175">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiGroupReferReferralFriends.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiGroupReferReferralFriends.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiGroupReferReferralFriends;
