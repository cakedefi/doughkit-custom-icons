import React from 'react';
import PropTypes from 'prop-types';

const UiBookLearnKnowledgeDocumentation = props => {
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
      <g clipPath="url(#clip0_104_1134)">
        <path d="M10.85 21.525c-.9-.65-1.862-1.175-2.887-1.575a13.898 13.898 0 00-3.213-.825c-.5-.067-.917-.28-1.25-.638-.333-.358-.5-.77-.5-1.237V10.2c0-.633.217-1.154.65-1.563a1.697 1.697 0 011.525-.462c1.283.217 2.504.608 3.663 1.175 1.158.567 2.212 1.3 3.162 2.2a12.67 12.67 0 013.163-2.2 13.34 13.34 0 013.662-1.175c.583-.1 1.092.054 1.525.462.433.409.65.93.65 1.563v7.05c0 .467-.167.879-.5 1.237-.333.359-.75.571-1.25.638-1.117.15-2.187.425-3.212.825-1.025.4-1.988.925-2.888 1.575-.333.25-.717.375-1.15.375-.433 0-.817-.125-1.15-.375zM12 9c-1.1 0-2.042-.392-2.825-1.175C8.392 7.042 8 6.1 8 5s.392-2.042 1.175-2.825C9.958 1.392 10.9 1 12 1s2.042.392 2.825 1.175C15.608 2.958 16 3.9 16 5s-.392 2.042-1.175 2.825C14.042 8.608 13.1 9 12 9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1134">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiBookLearnKnowledgeDocumentation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiBookLearnKnowledgeDocumentation.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiBookLearnKnowledgeDocumentation;
