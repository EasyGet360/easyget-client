import React, { useEffect, useState, useContext } from 'react';
import { Card, Typography, Input, Space, Row, Col, Select, Badge, Button } from 'antd';

import { InstagramOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import data from '../data.json';
import useLocalStorage from '../hooks/useLocalStorage';
import { AnchorTabs } from './ant/AnchorTabs';
import { Categories } from './RestaurantMenu/Categories';
import { Basket } from './RestaurantMenu/Basket';
import { restaurant_menu } from '../models/instances';
import BasketContext from '../context/basket/basketContext';

const { Option } = Select;
const { Link, Title } = Typography;
const { Search } = Input;

const defaultContext = {
  generateAnchor: (text: string): string => {
    return `${encodeURIComponent(text)}`;
  },
  menu: restaurant_menu,
};
export const RestaurantMenuContext = React.createContext(defaultContext);

const RestaurantMenu: React.FunctionComponent = () => {
  const [table, setTable] = useLocalStorage('table', 0);
  const [activeLink, setActiveLink] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [filteredMenu, setFilteredMenu] = useState(restaurant_menu);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { clearContext, products } = useContext(BasketContext);

  const handleChange = (e: any) => {
    setTable(e || 0);
    clearContext();
  };

  const [searchableMenu] = useState(
    restaurant_menu.map((category) => {
      return {
        ...category,
        full_text_search: `${category.name} ${
          category.description
        } ${category.products.reduce<string>(
          (acc, curr) => `${acc} ${curr.name} ${curr.description}`,
          ''
        )}`.toLowerCase(),
        products: category.products.map((product) => ({
          ...product,
          full_text_search: `${product.name} ${product.description}`.toLowerCase(),
        })),
      };
    })
  );

  useEffect(() => {
    const handledSearch = search.toLowerCase();
    const filteredCategories = searchableMenu.filter((x) =>
      x.full_text_search.includes(handledSearch)
    );
    const filteredMenu = filteredCategories.map((category) => ({
      ...category,
      products: category.products.filter((x) => x.full_text_search.includes(handledSearch)),
    }));
    setFilteredMenu(filteredMenu);
  }, [search, searchableMenu]);

  return (
    <RestaurantMenuContext.Provider value={{ ...defaultContext, menu: filteredMenu }}>
      <Card
        cover={
          <img
            alt="example"
            style={{ maxHeight: '25vh', objectFit: 'cover' }}
            src={data['bg-img']}
          />
        }
        title={data.name}
        extra={
          data.ig &&
          data.ig.link && (
            <Link href={data.ig.link} target="_blank">
              <InstagramOutlined />
            </Link>
          )
        }
      >
        <Space direction="vertical" style={{ width: '100%' }}>
          <Row gutter={10} align="middle" justify="space-between">
            <Col>
              <Select
                size="large"
                defaultValue={table > 0 ? table : '??En qu?? mesa est??s?'}
                onChange={(e) => handleChange(e)}
              >
                <Option value={1}>Mesa 1</Option>
                <Option value={2}>Mesa 2</Option>
                <Option value={3}>Mesa 3</Option>
                <Option value={4}>Mesa 4</Option>
              </Select>
            </Col>
            <Col>
              <Badge count={products.length}>
                <Button
                  shape="circle"
                  icon={<ShoppingCartOutlined style={{ fontSize: '25px' }} />}
                  type="link"
                  onClick={() => setModalVisible(!modalVisible)}
                ></Button>
                {modalVisible && (
                  <Basket
                    setModalVisible={() => setModalVisible(false)}
                    modalVisible={modalVisible}
                  />
                )}
              </Badge>
            </Col>
          </Row>

          {table > 0 && (
            <>
              <Title level={2}>Bienvenid@!</Title>
              <Search
                placeholder={data.search_placeholder}
                allowClear
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
              <AnchorTabs
                links={filteredMenu.map((elem, i) => ({
                  key: defaultContext.generateAnchor(`#${elem.name}_${i}`),
                  title: elem.name,
                }))}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
              <Categories />
            </>
          )}
        </Space>
      </Card>
    </RestaurantMenuContext.Provider>
  );
};

export default RestaurantMenu;
