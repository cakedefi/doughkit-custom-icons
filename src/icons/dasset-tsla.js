import React from 'react';
import PropTypes from 'prop-types';

const DassetTsla = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0z"
      ></path>
      <path d="M6.915 10.382v3.868h-.966v-3.868H4.822v-.844h3.22v.844H6.915z"></path>
      <path d="M9.97 14.331c-.707 0-1.26-.247-1.66-.742l.62-.622c.27.347.624.52 1.06.52.45 0 .675-.198.675-.594 0-.162-.04-.288-.121-.378-.081-.09-.207-.153-.378-.189l-.432-.08c-.437-.082-.759-.232-.966-.453-.202-.225-.303-.535-.303-.931 0-.46.135-.808.405-1.047.27-.238.666-.358 1.188-.358.666 0 1.172.216 1.518.648l-.62.621a1.101 1.101 0 00-.399-.317 1.135 1.135 0 00-.513-.108c-.216 0-.373.04-.472.122-.095.08-.142.211-.142.391 0 .158.036.277.108.358.076.081.198.14.364.175l.432.088c.23.05.426.11.588.182.166.068.301.156.405.264a.908.908 0 01.23.384c.049.149.073.322.073.52 0 .504-.141.889-.425 1.155-.283.26-.695.391-1.235.391z"></path>
      <path d="M12.344 14.25V9.538h.965v3.868h1.6v.844h-2.565z"></path>
      <path d="M18.259 14.25l-.29-1.154h-1.445l-.29 1.154h-.925l1.336-4.712h1.229l1.337 4.712h-.952zm-.817-3.017l-.148-.817h-.108l-.149.817-.277 1.086h.972l-.29-1.086z"></path>
    </svg>
  );
};

DassetTsla.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetTsla.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetTsla;
