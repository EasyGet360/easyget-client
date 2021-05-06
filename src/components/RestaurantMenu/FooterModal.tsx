import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Product, ProductBasket } from '../../models/types';
import BasketContext from '../../context/basket/basketContext';

type Props = {
  product: Product;
  count: number;
  setCount: (count: number) => void;
  setModalVisible: (modalVisible: boolean) => void;
};

export const FooterModal: React.FunctionComponent<Props> = (props) => {
  const { addProduct } = useContext(BasketContext);
  const { name, price, description, image } = props.product;
  const { count, setCount, setModalVisible } = props;
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
    <>
      <Tooltip title="search" key="1" style={{ width: '1px' }}>
        <Button
          type="primary"
          style={{ float: 'left' }}
          onClick={() => decline()}
          key="hols"
          shape="circle"
          icon={<MinusOutlined />}
        />
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
      </Tooltip>
      ,
      <Button
        key="back"
        onClick={() => {
          addToBasket({ id: uuidv4(), name, description, image, price, howMuch: count });
          setModalVisible(false);
        }}
      >
        Add to basket
      </Button>
    </>
  );
};
