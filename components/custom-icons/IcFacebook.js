import * as React from "react";

function IcFacebook({ className }) {
  return (
    <svg width={15} height={16} className={`${className ?? ''} fill-current`}>
      <path
        d="M12.709 1.252H2.625A1.375 1.375 0 001.25 2.627V12.71a1.375 1.375 0 001.375 1.375h3.932V9.722H4.752V7.67h1.805V6.103c0-1.78 1.06-2.763 2.683-2.763.778 0 1.59.138 1.59.138v1.748h-.895c-.883 0-1.158.547-1.158 1.11v1.333h1.97l-.315 2.053H8.777v4.363h3.932a1.375 1.375 0 001.375-1.375V2.627a1.375 1.375 0 00-1.375-1.375z"
      />
    </svg>
  );
}

const MemoIcFacebook = React.memo(IcFacebook);
export default MemoIcFacebook;
