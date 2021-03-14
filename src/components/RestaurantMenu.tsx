import { useCallback, useState } from "react";
import {
  Layout,
  Card,
  Typography,
  Input,
  Tabs,
  Select,
  Badge,
  List,
  Avatar,
  Row,
  Col,
  Space,
} from "antd";
import { ShoppingCartOutlined, InstagramOutlined } from "@ant-design/icons";
import data from "../data.json";

const { Link, Title, Paragraph } = Typography;
const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

type Category = {
  name: string;
  description: string;
  products: Product[];
};

type Product = {
  name: string;
  description?: string;
  price: number;
  image?: string;
  allergens?: Allergen[];
};

type Allergen = {
  name: string;
  icon: string;
};

const restaurant_menu: Category[] = [
  {
    name: "Para comer",
    description: "Se pueden pedir para llevar a casa.",
    products: [
      // {
      //   name: "PROMOCIÓN PARA PICAR",
      //   description: `Bebida natural (limonada, pomelada, limonada de piña y perejil)
      // + quiche artesanal (bacon o salmón ahumado)`,
      //   price: 5,
      // },
      {
        name: "Quiche de bacon",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        price: 2.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
        ],
      },
      {
        name: "Quiche de bacon",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        price: 2.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
        ],
      },
    ],
  },
  {
    name: "Hamburguesas",
    description: `Se pueden pedir para llevar a casa.

    En pan de cristal y acompañadas de patatas y ensalada.`,
    products: [
      {
        name: "Clásica con miel",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        description: `Ternera con queso cheddar y nuestra salsa bbq de la casa con bacon.`,
        price: 12.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
          {
            name: "pescao",
            icon: "pescao",
          },
        ],
      },
      {
        name: "Montañesa",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        description: "Ternera con pimientos asados, queso de cabra y lechuga.",
        price: 14.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
        ],
      },
    ],
  },
  {
    name: "Para comer",
    description: "Se pueden pedir para llevar a casa.",
    products: [
      {
        name: "PROMOCIÓN PARA PICAR",
        description: `Bebida natural (limonada, pomelada, limonada de piña y perejil)
      + quiche artesanal (bacon o salmón ahumado)`,
        price: 5,
      },
      {
        name: "Quiche de bacon",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        price: 2.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
        ],
      },
    ],
  },
  {
    name: "Hamburguesas",
    description: `Se pueden pedir para llevar a casa.

    En pan de cristal y acompañadas de patatas y ensalada.`,
    products: [
      {
        name: "Clásica",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        description: `Ternera con queso cheddar y nuestra salsa bbq de la casa con bacon.`,
        price: 12.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
          {
            name: "pescao",
            icon: "pescao",
          },
        ],
      },
      {
        name: "Montañesa",
        image:
          "https://lafrancachela.com/wp-content/uploads/2020/03/EnsaladillaH.jpg",
        description: "Ternera con pimientos asados, queso de cabra y lechuga.",
        price: 14.5,
        allergens: [
          {
            name: "trigo",
            icon: "trigo",
          },
        ],
      },
    ],
  },
];

const RestaurantMenu = () => {
  const [table, setTable] = useState<string>();

  const handleChange = useCallback(() => {
    console.log(`selected ${table}`);
  }, [table]);

  return (
    <Card
      cover={
        <img
          alt="example"
          style={{ maxHeight: "25vh", objectFit: "cover" }}
          src={data["bg-img"]}
        />
      }
      title={data.name}
      extra={
        data.ig &&
        data.ig.link && (
          <Link href={data.ig.link} target="_blank">
            <InstagramOutlined />
          </Link>
        )
      }
    >
      <Space direction="vertical" style={{ width: "100%" }}>
        <Row gutter={10} align="middle" justify="space-between">
          <Col>
            <Select
              placeholder="¿En qué mesa estás?"
              size="large"
              onChange={(value) => setTable(value.toString())}
            >
              <Option value={1}>Mesa 1</Option>
              <Option value={2}>Mesa 2</Option>
              <Option value={3}>Mesa 3</Option>
              <Option value={4}>Mesa 4</Option>
            </Select>
          </Col>
          <Col>
            <Badge count={5}>
              <ShoppingCartOutlined style={{ fontSize: "25px" }} />
            </Badge>
          </Col>
        </Row>
        {table && (
          <>
            <Title level={2}>Bienvenid@!</Title>
            <Search
              placeholder={data.search_placeholder}
              allowClear
              onSearch={() => {
                alert("holiii");
              }}
            />
            <Tabs defaultActiveKey="1">
              {restaurant_menu.map((category, i) => (
                <TabPane tab={category.name} key={i}>
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
                </TabPane>
              ))}
            </Tabs>
          </>
        )}
      </Space>
    </Card>
  );
};

export default RestaurantMenu;
