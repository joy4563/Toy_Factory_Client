import React, { useState } from 'react';
import TabList from './TabList';

const Tabs = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className={`glass grid tabs-grid-cols-auto gap-2 p-1 rounded transition-all mb-4`}>
      {tabList.map((tab) => (
        <TabList
          key={tab.id}
          title={tab.title}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
        />
      ))}
    </div>
  );
};

export default Tabs;
