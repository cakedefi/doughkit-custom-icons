import React from 'react';
import PropTypes from 'prop-types';

const DassetGoogl = props => {
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
      <path d="M5.626 13.59H5.53a.794.794 0 01-.288.528c-.16.136-.378.204-.654.204-.2 0-.39-.038-.57-.114a1.217 1.217 0 01-.474-.366 1.959 1.959 0 01-.33-.66 3.662 3.662 0 01-.12-1.008c0-.396.04-.732.12-1.008.08-.276.192-.5.336-.672.144-.176.318-.304.522-.384.204-.08.432-.12.684-.12.376 0 .688.082.936.246.248.16.442.4.582.72l-.702.402a.88.88 0 00-.282-.444c-.132-.112-.312-.168-.54-.168a.715.715 0 00-.546.216c-.132.144-.198.36-.198.648v1.092c0 .288.068.504.204.648.136.14.324.21.564.21a.849.849 0 00.534-.162c.144-.112.216-.276.216-.492v-.246h-.69v-.72h1.512v2.31h-.72v-.66z"></path>
      <path d="M8.635 14.322c-.252 0-.48-.038-.684-.114a1.283 1.283 0 01-.522-.378 1.891 1.891 0 01-.336-.672c-.08-.276-.12-.61-.12-1.002s.04-.724.12-.996c.08-.276.192-.5.336-.672.144-.176.318-.302.522-.378.204-.08.432-.12.684-.12.252 0 .48.04.684.12.204.076.378.202.522.378.144.172.256.396.336.672.08.272.12.604.12.996s-.04.726-.12 1.002c-.08.272-.192.496-.336.672a1.283 1.283 0 01-.522.378 1.947 1.947 0 01-.684.114zm0-.756c.24 0 .424-.072.552-.216.132-.144.198-.36.198-.648V11.61c0-.288-.066-.504-.198-.648-.128-.144-.312-.216-.552-.216-.24 0-.426.072-.558.216-.128.144-.192.36-.192.648v1.092c0 .288.064.504.192.648.132.144.318.216.558.216z"></path>
      <path d="M12.485 14.322c-.252 0-.48-.038-.684-.114a1.283 1.283 0 01-.522-.378 1.891 1.891 0 01-.336-.672c-.08-.276-.12-.61-.12-1.002s.04-.724.12-.996c.08-.276.192-.5.336-.672.144-.176.318-.302.522-.378.204-.08.432-.12.684-.12.252 0 .48.04.684.12.204.076.378.202.522.378.144.172.256.396.336.672.08.272.12.604.12.996s-.04.726-.12 1.002c-.08.272-.192.496-.336.672a1.283 1.283 0 01-.522.378 1.947 1.947 0 01-.684.114zm0-.756c.24 0 .424-.072.552-.216.132-.144.198-.36.198-.648V11.61c0-.288-.066-.504-.198-.648-.128-.144-.312-.216-.552-.216-.24 0-.426.072-.558.216-.128.144-.192.36-.192.648v1.092c0 .288.064.504.192.648.132.144.318.216.558.216z"></path>
      <path d="M17.204 13.59h-.096a.794.794 0 01-.288.528c-.16.136-.378.204-.654.204-.2 0-.39-.038-.57-.114a1.217 1.217 0 01-.474-.366 1.959 1.959 0 01-.33-.66 3.662 3.662 0 01-.12-1.008c0-.396.04-.732.12-1.008.08-.276.192-.5.336-.672.144-.176.318-.304.522-.384.204-.08.432-.12.684-.12.376 0 .688.082.936.246.248.16.442.4.582.72l-.702.402a.88.88 0 00-.282-.444c-.132-.112-.312-.168-.54-.168a.715.715 0 00-.546.216c-.132.144-.198.36-.198.648v1.092c0 .288.068.504.204.648.136.14.324.21.564.21a.849.849 0 00.534-.162c.144-.112.216-.276.216-.492v-.246h-.69v-.72h1.512v2.31h-.72v-.66z"></path>
      <path d="M18.695 14.25v-4.188h.858V13.5h1.422v.75h-2.28z"></path>
    </svg>
  );
};

DassetGoogl.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DassetGoogl.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default DassetGoogl;
