
import * as React from "react";

function IcMenu({ className }) {
  return (
    <svg width={20} height={18} className={`${className ?? ''} fill-current`}>
      <rect y={0.546} width={16.471} height={3} rx={1.5}  />
      <rect y={7.546} width={20} height={3} rx={1.5}  />
      <rect y={14.546} width={11.765} height={3} rx={1.5}  />
    </svg>
  );
}

const MemoIcMenu = React.memo(IcMenu);
export default MemoIcMenu;
