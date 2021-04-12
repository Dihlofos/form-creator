import { Content, ContentBox, Layout } from 'ui';
import React, { FC } from 'react';
import FormTabs from '../FormTabs/FormTabs';

const App: FC = () => (
  <Layout>
    <Content>
      <ContentBox>
        <FormTabs />
      </ContentBox>
    </Content>
  </Layout>
);

export default App;
