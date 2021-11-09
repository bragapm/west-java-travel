
import * as React from "react";

function IcYoutube({ className}) {
  return (
    <svg width={15} height={16} className={`${className ?? ''} fill-current`}>
      <g clipPath="url(#prefix__clip0_816:3802)">
        <path
          d="M13.996 4.31a1.748 1.748 0 00-1.23-1.238c-1.084-.293-5.433-.293-5.433-.293s-4.348 0-5.433.293A1.747 1.747 0 00.671 4.309c-.29 1.092-.29 3.37-.29 3.37s0 2.276.29 3.368c.16.602.631 1.057 1.23 1.218 1.084.292 5.432.292 5.432.292s4.349 0 5.434-.292a1.721 1.721 0 001.229-1.218c.29-1.092.29-3.369.29-3.369s0-2.277-.29-3.369zM5.911 9.745V5.61l3.635 2.068L5.91 9.746z"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_816:3802">
          <path
            fill="#fff"
            transform="translate(0 .335)"
            d="M0 0h14.667v14.667H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoIcYoutube = React.memo(IcYoutube);
export default MemoIcYoutube;
