/* eslint-disable jsx-a11y/anchor-is-valid */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => (
  <>
    <div className="tabs">
      <a className="tab tab-bordered">Tab 1</a>
      <a className="tab tab-bordered tab-active">Tab 2</a>
      <a className="tab tab-bordered">Tab 3</a>
    </div>
    <Tabs>
      <TabList className="tabs">
        <Tab className="tab tab-bordered">Title 1</Tab>
        <Tab className="tab tab-bordered">Title 2</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  </>
);

export default ShopByCategory;
