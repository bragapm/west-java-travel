
import * as React from "react";

function IcArrowIos(props) {
  return (
    <svg width={22} height={22} fill="none" {...props}>
      <path
        d="M3.668 8.374a1.035 1.035 0 01.558-.921 1.05 1.05 0 011.157.12l5.603 4.655 5.613-4.488a1.048 1.048 0 011.474.156 1.037 1.037 0 01-.157 1.516l-6.272 5.018a1.049 1.049 0 01-1.327 0L4.045 9.236a1.04 1.04 0 01-.377-.862z"
        fill="#FCBD0F"
      />
    </svg>
  );
}

const MemoIcArrowIos = React.memo(IcArrowIos);
export default MemoIcArrowIos;
