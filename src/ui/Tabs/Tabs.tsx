import React, { FC } from 'react';
import { Tabs as TabsComponent, TabsProps } from 'antd';

import 'antd/lib/tabs/style/css';

export const { TabPane } = TabsComponent;

export const Tabs: FC<TabsProps> = (props) => (
  <TabsComponent type="card" {...props} />
);
