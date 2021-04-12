import React, { FC, useCallback } from 'react';
import { withTranslation, TFunction } from 'react-i18next';
import { TabPane, Tabs } from 'ui';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTab, getValidateStatus, setActiveTab } from 'store';
import FormResult from '../FormResult/FormResult';
import FormConfig from '../FormConfig/FormConfig';

const FormTabs: FC<{ t: TFunction }> = ({ t }) => {
  const dispatch = useDispatch();
  const activeTab = useSelector(getActiveTab);
  const status = useSelector(getValidateStatus);

  const handleChange = useCallback(
    (e: string) => {
      dispatch(setActiveTab(e));
    },
    [dispatch]
  );

  return (
    <Tabs
      defaultActiveKey={activeTab}
      activeKey={activeTab}
      onChange={handleChange}
    >
      <TabPane tab={t('result')} key="result" disabled={status !== 'success'}>
        <FormResult />
      </TabPane>
      <TabPane tab={t('config')} key="config">
        <FormConfig />
      </TabPane>
    </Tabs>
  );
};

export default withTranslation()(FormTabs);
