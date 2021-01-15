import React from 'react';

import { Link } from './Link';

export default {
  title: 'UI/Link',
};

export const Default = () => <Link href="#">Link</Link>;
export const AsButton = () => (
  <Link href="#" asButton>
    Link
  </Link>
);
