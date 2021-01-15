import * as React from 'react';

const SvgArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.293 16.707a1 1 0 010-1.414L13.586 12l-3.293-3.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
    />
  </svg>
);

export default SvgArrowRight;
