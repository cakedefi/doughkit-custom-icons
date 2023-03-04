import React from 'react';
import PropTypes from 'prop-types';

const UiStarReviewRateRatingFavoriteOutline = props => {
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
      <path d="M8.85 16.825l3.15-1.9 3.15 1.925-.825-3.6 2.775-2.4-3.65-.325-1.45-3.4-1.45 3.375-3.65.325 2.775 2.425-.825 3.575zm3.15.45l-4.15 2.5a.908.908 0 01-.575.15.966.966 0 01-.525-.2 1.2 1.2 0 01-.35-.437.876.876 0 01-.05-.588l1.1-4.725L3.775 10.8a.955.955 0 01-.312-.513.991.991 0 01.037-.562c.067-.183.167-.333.3-.45.133-.117.317-.192.55-.225l4.85-.425 1.875-4.45c.083-.2.213-.35.388-.45.175-.1.354-.15.537-.15.183 0 .363.05.538.15.175.1.304.25.387.45l1.875 4.45 4.85.425c.233.033.417.108.55.225.133.117.233.267.3.45a.961.961 0 01-.275 1.075l-3.675 3.175 1.1 4.725a.876.876 0 01-.05.588 1.2 1.2 0 01-.35.437.966.966 0 01-.525.2.908.908 0 01-.575-.15l-4.15-2.5z"></path>
    </svg>
  );
};

UiStarReviewRateRatingFavoriteOutline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiStarReviewRateRatingFavoriteOutline.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiStarReviewRateRatingFavoriteOutline;
