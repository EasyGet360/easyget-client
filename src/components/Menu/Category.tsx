import { Fragment, useCallback, useState } from "react";
import {
  Card,
  Typography,
  Anchor,
  Row,
  Col,
} from "antd";
import { restaurant_menu } from '../../Models/instances'
const { Link, Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;


export const Category = (props: any) => {
  return (
    <Fragment>{restaurant_menu.map((category, i) => (
      <div id={props.generateAnchor(`${category.name}_${i}`)} key={i}>
        <Title level={3}>{category.name}</Title>
        <Paragraph>{category.description}</Paragraph>
        {category.products.map((product) => (
          <Card
            key={product.name}
            hoverable
            style={{ width: "100%" }}
            onClick={() => alert(product.name)}
          >
            <Row justify="space-between" style={{ width: "100%" }}>
              <Col>
                <Title level={5}>{product?.name}</Title>

                {product?.description}
                <Title level={5}>{product?.price}</Title>
              </Col>
              <Col>
                {product.image && (
                  <img
                    width="100%"
                    style={{ maxWidth: "150px" }}
                    src={product.image}
                  />
                )}
              </Col>
            </Row>
          </Card>
        ))}
      </div>
    ))}
    </Fragment>
  );
};

