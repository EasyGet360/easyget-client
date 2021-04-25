import { Card, Row, Col, Typography, Modal, Button, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Product } from '../../models/types';
const { Title } = Typography;

export const CardProduct: React.FunctionComponent<Product> = ({
  name,
  description,
  price,
  image,
}) => {
  const [modal1Visible, setModal1Visible] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const increase = (): void => {
    setCount(count + 1);
  };

  const decline = (): void => {
    let newCount = count - 1;
    if (newCount < 0) {
      newCount = 0;
    }
    setCount(newCount);
  };
  return (
    <React.Fragment>
      <Card
        key={name}
        hoverable
        style={{ width: '100%' }}
        onClick={() => setModal1Visible(!modal1Visible)}
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
        {console.log('hello ', modal1Visible)}
      </Card>
      <Modal
        title={name}
        bodyStyle={{ textAlign: 'center' }}
        centered
        width={500}
        visible={modal1Visible && true}
        onOk={() => setModal1Visible(false)}
        onCancel={() => setModal1Visible(false)}
        footer={[
          <Tooltip title="search" key="1" style={{ width: '1px' }}>
            <React.Fragment>
              <Button
                type="primary"
                style={{ float: 'left' }}
                onClick={() => increase()}
                key="hols"
                shape="circle"
                icon={<PlusOutlined />}
              />
            </React.Fragment>
            <h2 style={{ float: 'left', textAlign: 'center', marginLeft: '2%', marginRight: '2%' }}>
              {count}
            </h2>
            <Button
              style={{ float: 'left' }}
              type="primary"
              key="hols1"
              onClick={() => decline()}
              shape="circle"
              icon={<MinusOutlined />}
            />
          </Tooltip>,
          <Button key="back">Add to basket</Button>,
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
