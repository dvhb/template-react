import React, { FC } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../store/reducers';
import { Page } from './Page';

type Props = {} & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const PageContainerPure: FC<Props> = () => <Page />;

export const PageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainerPure);
