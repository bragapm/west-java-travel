
import * as React from "react";

function IcAccomodation({ className }) {
  return (
    <svg width={21} height={20} className={`${className ?? ''} fill-current`}>
      <g clipPath="url(#prefix__clip0_480_1947)" >
        <path d="M19.834 10.208V8.542c0-1.267-.817-2.084-2.084-2.084H8.167c-1.267 0-2.083.817-2.083 2.084v1.653l-4.055.01H1.5V3.137a.427.427 0 00-.354-.425.417.417 0 00-.479.412v13.738c0 .208.15.395.354.425a.417.417 0 00.48-.413v-2.5h18.333v2.488c0 .208.15.395.354.425a.417.417 0 00.479-.413v-5.833c0-.567-.267-.83-.833-.834zM6.917 8.542c0-1.088.783-1.25 1.25-1.25h9.583c.467 0 1.25.162 1.25 1.25v1.666H6.917V8.542zm12.917 5H1.5v-2.5h18.334v2.5z" />
        <path d="M3.812 5.566a2.314 2.314 0 100 4.63 2.314 2.314 0 000-4.63zm0 3.887a1.572 1.572 0 110-3.144 1.572 1.572 0 010 3.144z" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_480_1947">
          <path fill="#fff" transform="translate(.667)" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcAccomodation = React.memo(IcAccomodation);
export default MemoIcAccomodation;
