import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, Row, Col, Typography, Modal, Button, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Product, ProductBasket } from '../../models/types';
import BasketContext from '../../context/basket/basketContext';
const { Title } = Typography;

export const ProductCard: React.FunctionComponent<Product> = ({
  name,
  description,
  price,
  image,
}) => {
  const { addProduct, deleteProduct, products } = useContext(BasketContext);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const increase = (): void => {
    setCount(count + 1);
  };
  const addToBasket = (product: ProductBasket): void => {
    product['howMuch'] = count;
    addProduct(product);
  };
  const decline = (): void => {
    let newCount = count - 1;
    if (newCount < 1) {
      newCount = 1;
    }
    setCount(newCount);
  };
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
      <Modal
        title={name}
        bodyStyle={{ textAlign: 'center' }}
        centered
        width={500}
        visible={modalVisible && true}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={[
          <Tooltip title="search" key="1" style={{ width: '1px' }}>
            <React.Fragment>
              <Button
                type="primary"
                style={{ float: 'left' }}
                onClick={() => decline()}
                key="hols"
                shape="circle"
                icon={<MinusOutlined />}
              />
            </React.Fragment>
            <h2 style={{ float: 'left', textAlign: 'center', marginLeft: '2%', marginRight: '2%' }}>
              {count}
            </h2>
            <Button
              style={{ float: 'left' }}
              type="primary"
              key="hols1"
              onClick={() => increase()}
              shape="circle"
              icon={<PlusOutlined />}
            />
          </Tooltip>,
          <Button
            key="back"
            onClick={() => {
              addToBasket({ id: uuidv4(), name, description, image, price, howMuch: count });
              setModalVisible(false);
            }}
          >
            Add to basket
          </Button>,
        ]}
      >
        <React.Fragment>
          {image && (
            <img
              width="100%"
              height="100%"
              style={{ maxWidth: '150px', marginBottom: '3%' }}
              src={image}
              alt="La concha de la lora"
            />
          )}
          <p>{description}</p>
        </React.Fragment>
      </Modal>
    </React.Fragment>
  );
};
