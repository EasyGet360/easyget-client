import { Layout, Card, Typography, Badge, Select } from "antd";
import RestaurantMenu from "./components/RestaurantMenu";
import "./App.css";
import data from "./data.json";

const { Link } = Typography;
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      {/* <Header></Header> */}
      <Content>
        <RestaurantMenu></RestaurantMenu>
      </Content>
    </Layout>
  );
};

export default App;
