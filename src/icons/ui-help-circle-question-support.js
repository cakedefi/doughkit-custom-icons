import React from 'react';
import PropTypes from 'prop-types';

const UiHelpCircleQuestionSupport = props => {
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
      <g clipPath="url(#clip0_104_1123)">
        <path d="M11.95 18c.35 0 .646-.121.888-.363.241-.241.362-.537.362-.887s-.12-.646-.362-.887a1.208 1.208 0 00-.888-.363c-.35 0-.646.121-.888.363a1.206 1.206 0 00-.362.887c0 .35.12.646.362.887.242.242.538.363.888.363zm.15-10.3c.467 0 .842.129 1.125.387.283.259.425.596.425 1.013 0 .283-.096.57-.287.862a4.896 4.896 0 01-.813.913c-.5.433-.867.85-1.1 1.25-.233.4-.35.8-.35 1.2 0 .233.088.429.263.587A.904.904 0 0012.6 13.9c.183-.167.3-.375.35-.625.05-.283.163-.546.338-.787.175-.242.462-.555.862-.938.517-.483.88-.925 1.088-1.325.208-.4.312-.842.312-1.325 0-.85-.32-1.546-.962-2.088C13.946 6.271 13.117 6 12.1 6c-.7 0-1.32.133-1.862.4a2.844 2.844 0 00-1.263 1.225.99.99 0 00-.125.637c.033.209.15.38.35.513a.965.965 0 00.713.125 1 1 0 00.637-.425c.183-.25.404-.442.663-.575.258-.133.554-.2.887-.2zM12 22a9.671 9.671 0 01-3.875-.788 10.238 10.238 0 01-3.187-2.137 9.983 9.983 0 01-2.15-3.175A9.733 9.733 0 012 12c0-1.383.263-2.683.788-3.9a9.983 9.983 0 012.15-3.175c.908-.9 1.97-1.613 3.187-2.138A9.681 9.681 0 0112 2c1.4 0 2.708.262 3.925.787A10.105 10.105 0 0119.1 4.925c.9.9 1.608 1.958 2.125 3.175A9.873 9.873 0 0122 12a9.873 9.873 0 01-.775 3.9 9.927 9.927 0 01-2.125 3.175c-.9.9-1.958 1.612-3.175 2.137C14.708 21.737 13.4 22 12 22z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1123">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiHelpCircleQuestionSupport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiHelpCircleQuestionSupport.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiHelpCircleQuestionSupport;