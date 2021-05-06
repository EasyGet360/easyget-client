import React, { useState, useContext } from 'react';
import { Row, Col, Modal } from 'antd';
import { Product } from '../../models/types';
import BasketContext from '../../context/basket/basketContext';
import { FooterModal } from './FooterModal';

type Props = {
  product: Product;
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
};

export const ModalProduct: React.FunctionComponent<Props> = (props) => {
  const [count, setCount] = useState<number>(1);
  const { name, price, description, image } = props.product;
  const { modalVisible, setModalVisible } = props;
  return (
    <Modal
      title={
        <>
          <Row>
            <Col span={11}>{name}</Col>
            <Col span={5} offset={8}>
              {`Total: ${price * count}$`}
            </Col>
          </Row>
        </>
      }
      bodyStyle={{ textAlign: 'center' }}
      centered
      width={500}
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
      footer={
        <FooterModal
          setCount={setCount}
          setModalVisible={setModalVisible}
          count={count}
          product={props.product}
        />
      }
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
  );
};
