import * as React from 'react';

const SvgCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4a1 1 0 012 0v1h6V4a1 1 0 112 0v1h1a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h1V4zm9 3H6v3h12V7h-2zM6 12v6h12v-6H6z"
    />
  </svg>
);

export default SvgCalendar;
