import * as React from 'react';

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 18 18" width="1em" height="1em" {...props}>
    <path d="M2.6 9.5c-.1-.1-.1-.3-.1-.4 0-.1 0-.2.1-.3l.7-.7c.2-.2.5-.2.7 0l.1.1 2.8 2.9c.1.1.2.1.3 0l6.7-6.9h.1c.2-.2.5-.2.7 0l.7.7c.2.2.2.5 0 .7l-8 8.3c-.2 0-.2.1-.4.1s-.2-.1-.3-.1L2.8 9.6l-.2-.1z" />
    <path fill="none" d="M0 0h18v18H0z" />
  </svg>
);

export default SvgCheck;
