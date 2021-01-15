import * as React from 'react';

const SvgQuestion = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16zM8 5a1 1 0 00-1 1v.1a1 1 0 01-2 0V6a3 3 0 016 0v.172a3 3 0 01-.879 2.12L9 9.415V9.5a1 1 0 11-2 0V9a1 1 0 01.293-.707l1.414-1.414A1 1 0 009 6.172V6a1 1 0 00-1-1zm0 8a1 1 0 100-2 1 1 0 000 2z"
    />
  </svg>
);

export default SvgQuestion;
