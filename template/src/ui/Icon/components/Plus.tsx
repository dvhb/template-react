import * as React from 'react';

const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path
      d="M12 6c-.6 0-1 .4-1 1v4H7c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1h-4V7c0-.6-.4-1-1-1z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export default SvgPlus;
