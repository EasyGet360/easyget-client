import React, { useState } from 'react';
import { Card, Typography, Input, Space, Row, Col, Select, Badge } from 'antd';

import { InstagramOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import data from '../data.json';
import { AnchorTabs } from './ant/AnchorTabs';
import { Category } from './RestaurantMenu/Category';

const { Option } = Select;
const { Link, Title } = Typography;
const { Search } = Input;

const defaultContext = {
  generateAnchor: (text: string): string => {
    return `${encodeURIComponent(text)}`;
  },
};
export const RestaurantMenuContext = React.createContext(defaultContext);

const RestaurantMenu: React.FunctionComponent = () => {
  const [table, setTable] = useState<string>();
  const [link, setLink] = useState<string>('');

  return (
    <Card
      cover={
        <img alt="example" style={{ maxHeight: '25vh', objectFit: 'cover' }} src={data['bg-img']} />
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
              placeholder="¿En qué mesa estás?"
              size="large"
              onChange={(e) => setTable(e.toString())}
            >
              <Option value={1}>Mesa 1</Option>
              <Option value={2}>Mesa 2</Option>
              <Option value={3}>Mesa 3</Option>
              <Option value={4}>Mesa 4</Option>
            </Select>
          </Col>
          <Col>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: '25px' }} />
            </Badge>
          </Col>
        </Row>

        {table && (
          <>
            <Title level={2}>Bienvenid@!</Title>
            <Search
              placeholder={data.search_placeholder}
              allowClear
              onSearch={() => {
                alert('holiii');
              }}
            />
            <AnchorTabs
              link={link}
              setLink={setLink}
              generateAnchor={defaultContext.generateAnchor}
            />
            <Category />
          </>
        )}
      </Space>
    </Card>
  );
};

export default RestaurantMenu;
