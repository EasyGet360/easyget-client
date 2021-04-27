import React, { useState, useContext } from 'react';
import BasketContext from '../../context/basket/basketContext';
import { Card, Row, Col, Typography, Modal, Button, Tooltip } from 'antd';
import { BasketProps } from '../../models/types';
const { Title } = Typography;

export const Basket: React.FunctionComponent<BasketProps> = (props) => {
  const { addProduct, deleteProduct, products } = useContext(BasketContext);

  return (
    <Modal
      title={'Basket'}
      bodyStyle={{ textAlign: 'center' }}
      centered
      width={500}
      visible={props.modalVisible && true}
      onOk={() => props.setModalVisible(false)}
      onCancel={() => props.setModalVisible(false)}
    ></Modal>
  );
};
