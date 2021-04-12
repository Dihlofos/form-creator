import React, { FC, useCallback, useState } from 'react';
import { withTranslation, TFunction } from 'react-i18next';
import { TabPane, Tabs } from 'ui';
import FormResult from '../FormResult/FormResult';
import FormConfig from '../FormConfig/FormConfig';

const FormTabs: FC<{ t: TFunction }> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<string>('config');

  const handleApply = useCallback(() => {
    setActiveTab('result');
  }, []);

  const handleChange = useCallback((e: string) => {
    setActiveTab(e);
  }, []);

  return (
    <Tabs
      defaultActiveKey={activeTab}
      activeKey={activeTab}
      onChange={handleChange}
    >
      <TabPane tab={t('result')} key="result">
        <FormResult />
      </TabPane>
      <TabPane tab={t('config')} key="config">
        <FormConfig onConfigApply={handleApply} />
      </TabPane>
    </Tabs>
  );
};

export default withTranslation()(FormTabs);
