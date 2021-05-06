import React, { useState, useContext } from 'react';
import BasketContext from '../../context/basket/basketContext';
import { CloseOutlined } from '@ant-design/icons';
import { Card, Row, Col, Typography, Modal, Button, Tooltip } from 'antd';
import { ProductBasket } from '../../models/types';
const { Title } = Typography;

export const CardBasket: React.FunctionComponent<ProductBasket> = (product) => {
  const { deleteProduct } = useContext(BasketContext);
  return (
    <Card
      title={`${product.howMuch} x ${product.name}`}
      extra={
        <>
          <div>
            <Button
              style={{ marginLeft: 10 }}
              onClick={() => deleteProduct(product.id)}
              type="primary"
              icon={<CloseOutlined />}
            />
          </div>
        </>
      }
      bodyStyle={{ textAlign: 'center' }}
    >
      {product.description}
    </Card>
  );
};
