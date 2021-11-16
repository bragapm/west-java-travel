import * as React from "react";

function IcTwitter({ className }) {
  return (
    <svg width={13} height={13} className={`${className ?? ''} fill-current`}>
      <g clipPath="url(#prefix__clip0_816:3794)">
        <path
          d="M10.989 4.222c.007.106.007.213.007.32 0 3.25-2.474 6.997-6.997 6.997a6.95 6.95 0 01-3.777-1.104c.198.023.389.03.594.03 1.15 0 2.208-.388 3.054-1.05a2.464 2.464 0 01-2.3-1.706 2.6 2.6 0 001.112-.046A2.46 2.46 0 01.71 5.25v-.03c.327.182.708.296 1.111.312a2.458 2.458 0 01-.761-3.29A6.99 6.99 0 006.13 4.816a2.776 2.776 0 01-.06-.564 2.458 2.458 0 012.458-2.459c.709 0 1.348.297 1.797.777a4.841 4.841 0 001.561-.594 2.452 2.452 0 01-1.08 1.355 4.93 4.93 0 001.415-.38 5.287 5.287 0 01-1.233 1.27z"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_816:3794">
          <path
            fill="#fff"
            transform="translate(.222 .666)"
            d="M0 0h12v12H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcTwitter = React.memo(IcTwitter);
export default MemoIcTwitter;
