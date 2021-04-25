import React from 'react';
import { Layout } from 'antd';
import RestaurantMenu from './components/RestaurantMenu';
import BasketState from './context/basket/basketState';
import './App.css';

const { Content } = Layout;

const App: React.FunctionComponent = () => {
  return (
    <Layout className="layout">
      <Content>
        <BasketState>
          <RestaurantMenu />
        </BasketState>
      </Content>
    </Layout>
  );
};

export default App;
