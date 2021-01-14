import React from 'react';
import { Page, PageProps } from './Page';

export default {
  title: 'Pages/Page',
};

const props: PageProps = {};

export const Default = () => <Page {...props}>Page</Page>;
