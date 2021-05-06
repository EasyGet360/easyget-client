import React, { useContext } from 'react';
import { Card, Typography, Row, Col, Space } from 'antd';
import { RestaurantMenuContext } from '../RestaurantMenu';
import { ProductCard } from './ProdcutCard';

const { Title, Paragraph } = Typography;

export const Categories: React.FunctionComponent = () => {
  const { generateAnchor, menu } = useContext(RestaurantMenuContext);

  return (
    <Space direction="vertical" size="large">
      {menu.map((category, i) => (
        <div id={generateAnchor(`${category.name}_${i}`)} key={i}>
          <Title level={3}>{category.name}</Title>
          <Paragraph>{category.description}</Paragraph>
          {category.products.map((product, indx) => (
            <ProductCard
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              key={indx}
            />
          ))}
        </div>
      ))}
    </Space>
  );
};
