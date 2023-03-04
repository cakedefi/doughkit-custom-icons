import React from 'react';
import PropTypes from 'prop-types';

const UiDollarCircleFiatCurrencyMoney = props => {
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
      <g clipPath="url(#clip0_104_1151)">
        <path d="M12.025 21a.968.968 0 01-.713-.288.967.967 0 01-.287-.712v-1.15a5.19 5.19 0 01-1.975-.875c-.567-.417-1.025-1-1.375-1.75a.847.847 0 01-.013-.737 1.03 1.03 0 01.588-.563.88.88 0 01.725.013c.25.108.442.287.575.537.283.5.642.88 1.075 1.138.433.258.967.387 1.6.387.683 0 1.263-.154 1.738-.462.475-.309.712-.788.712-1.438 0-.583-.183-1.046-.55-1.388-.367-.341-1.217-.729-2.55-1.162-1.433-.45-2.417-.987-2.95-1.612-.533-.625-.8-1.388-.8-2.288 0-1.083.35-1.925 1.05-2.525.7-.6 1.417-.942 2.15-1.025V4a.97.97 0 01.287-.713.97.97 0 01.713-.287.97.97 0 01.713.287.97.97 0 01.287.713v1.1c.633.1 1.183.304 1.65.613.467.308.85.687 1.15 1.137a.77.77 0 01.088.725.938.938 0 01-.563.575.947.947 0 01-.725.012 1.81 1.81 0 01-.7-.487 2.234 2.234 0 00-.762-.538c-.292-.125-.655-.187-1.088-.187-.733 0-1.292.163-1.675.488-.383.325-.575.729-.575 1.212 0 .55.25.983.75 1.3.5.317 1.367.65 2.6 1 1.15.333 2.021.862 2.613 1.587.591.725.887 1.563.887 2.513 0 1.183-.35 2.083-1.05 2.7-.7.617-1.567 1-2.6 1.15V20c0 .283-.096.52-.287.712a.968.968 0 01-.713.288z"></path>
      </g>
      <defs>
        <clipPath id="clip0_104_1151">
          <rect width="24" height="24"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

UiDollarCircleFiatCurrencyMoney.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

UiDollarCircleFiatCurrencyMoney.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default UiDollarCircleFiatCurrencyMoney;
