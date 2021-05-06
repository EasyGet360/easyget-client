import React, { useState, useContext } from 'react';
import BasketContext from '../../context/basket/basketContext';
import { CardBasket } from './BasketCard';
import { Card, Row, Col, Typography, Modal, Button, Tooltip } from 'antd';
import { BasketProps, ProductBasket } from '../../models/types';
const { Title } = Typography;

export const Basket: React.FunctionComponent<BasketProps> = (props) => {
  const { addProduct, deleteProduct, products } = useContext(BasketContext);
  const calculateBill = () => {
    let count = 0;
    products.forEach((product: ProductBasket) => {
      count += product.price * product.howMuch;
    });
    return count;
  };

  return (
    <Modal
      title={
        <>
          <Row>
            <Col span={8}>Basket</Col>
            <Col span={8} offset={8}>
              {`Total: ${calculateBill()}$`}
            </Col>
          </Row>
        </>
      }
      bodyStyle={{ textAlign: 'center' }}
      centered
      width={500}
      visible={props.modalVisible && true}
      onOk={() => props.setModalVisible(false)}
      onCancel={() => props.setModalVisible(false)}
    >
      {products.map((product: ProductBasket, indx: number) => (
        <CardBasket
          id={product.id}
          description={product.description}
          name={product.name}
          price={product.price}
          key={indx}
          howMuch={product.howMuch}
        />
      ))}
    </Modal>
  );
};
