import React from 'react';
import { Layout } from 'antd';
import RestaurantMenu from './components/RestaurantMenu';
import './App.css';

const { Content } = Layout;

const App: React.FunctionComponent = () => {
  return (
    <Layout className="layout">
      <Content>
        <RestaurantMenu></RestaurantMenu>
      </Content>
    </Layout>
  );
};

export default App;
