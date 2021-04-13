import React, { FC } from 'react';
import { Tabs as TabsComponent, TabsProps } from 'antd';

export const { TabPane } = TabsComponent;

export const Tabs: FC<TabsProps> = (props) => (
  <TabsComponent type="card" {...props} />
);
