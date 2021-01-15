import * as React from 'react';

const SvgCross = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
    <path d="M13.4 12l4.3-4.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 10.6 7.7 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4.3 4.3-4.3 4.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l4.3-4.3 4.3 4.3c.4.4 1 .4 1.4 0s.4-1 0-1.4L13.4 12z" />
  </svg>
);

export default SvgCross;
