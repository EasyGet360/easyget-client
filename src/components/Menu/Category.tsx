import { Fragment } from "react";
import {
  Card,
  Typography,
  Row,
  Col,
} from "antd";
import { restaurant_menu } from '../../Models/instances'
const { Title, Paragraph } = Typography;


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
                    alt='La concha de la lora'
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

