/* eslint-disable jsx-a11y/anchor-is-valid */
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionTitle from '../SectionTitle';
import 'react-tabs/style/react-tabs.css';
import Container from '../Container';
import Tabs from '../Tabs/Tabs';
import { tabList } from '../../constants';

const ShopByCategory = () => (
  // <>
  //   <SectionTitle title="Shop by Category" />
  //   {/* <div className="tabs">
  //     <a className="tab tab-bordered">Tab 1</a>
  //     <a className="tab tab-bordered tab-active">Tab 2</a>
  //     <a className="tab tab-bordered">Tab 3</a>
  //   </div> */}
  //   <Tabs>
  //     <TabList className="tabs">
  //       <Tab className="tab tab-bordered">Title 1</Tab>
  //       <Tab className="tab tab-bordered tab-active">Title 2</Tab>
  //     </TabList>

  //     <TabPanel>
  //       <h2>Any content 1</h2>
  //     </TabPanel>
  //     <TabPanel>
  //       <h2>Any content 2</h2>
  //     </TabPanel>
  //   </Tabs>
  // </>
  <Container>
    <SectionTitle title="Shop by Category" />
    <div className="glass rounded-lg w-full p-6">
      <Tabs tabList={tabList} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="card w-full glass">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Wooden horse with rider!</h2>
            <p>This is horse and it's rider made with wood a toy.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default ShopByCategory;
