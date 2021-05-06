import React, { useState } from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Product } from '../../models/types';
import { ModalProduct } from './ModalProduct';
const { Title } = Typography;

export const ProductCard: React.FunctionComponent<Product> = ({
  name,
  description,
  price,
  image,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Card
        key={name}
        hoverable
        style={{ width: '100%' }}
        onClick={() => setModalVisible(!modalVisible)}
      >
        <Row justify="space-between" style={{ width: '100%' }}>
          <Col>
            <Title level={5}>{name}</Title>
            {description}
            <Title level={5}>{price}</Title>
          </Col>
          <Col>
            {image && (
              <img
                width="100%"
                style={{ maxWidth: '150px' }}
                src={image}
                alt="La concha de la lora"
              />
            )}
          </Col>
        </Row>
      </Card>
      {modalVisible && (
        <ModalProduct
          product={{ name, description, price, image }}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      )}
    </React.Fragment>
  );
};
