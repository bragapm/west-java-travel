import * as React from "react";

function IcPlayButton({ className }) {
  return (
    <svg width={84} height={84} className={`${className ?? ''} rounded-full hover:shadow-2xl shadow-xl transition-all duration-300 fill-current text-white hover:text-gray-200`}>
      <path
        d="M42 .334C19.035.334.333 19.026.333 42.024c0 22.95 18.702 41.643 41.667 41.643s41.667-18.693 41.667-41.642C83.667 19.027 64.965.334 42 .334"
      />
      <path
        d="M58.41 44.955a16.6 16.6 0 01-1.127 1.287l-.241.241c-3.379 3.658-11.784 9.166-16.047 10.934 0 .04-2.534 1.086-3.74 1.126h-.162c-1.85 0-3.58-1.045-4.464-2.734-.483-.924-.925-3.618-.965-3.658-.362-2.412-.604-6.106-.604-10.17 0-4.261.242-8.12.684-10.492 0-.04.443-2.211.724-2.935a5.214 5.214 0 012.252-2.492 5.596 5.596 0 012.534-.603c.925.04 2.655.647 3.338.924 4.505 1.77 13.112 7.558 16.41 11.095.563.563 1.166 1.246 1.327 1.407.684.885 1.045 1.97 1.045 3.14 0 1.041-.321 2.086-.965 2.93"
        fill="#086CB4"
      />
    </svg>
  );
}

const MemoIcPlayButton = React.memo(IcPlayButton);
export default MemoIcPlayButton;
