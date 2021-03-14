import {useCallback, useState } from "react";
import {
  Card,
  Typography,
  Input,
  Space,
} from "antd";

import { InstagramOutlined } from "@ant-design/icons";
import data from "../data.json";
import {SelectCustom} from './Menu/SelectCustom'
import {AnchonCategories} from './Menu/AnchonCategories'
import {Category} from './Menu/Category'

const { Link, Title } = Typography;
const { Search } = Input;

const generateAnchor = (text: string): string => {
  return `${encodeURIComponent(text)}`;
};

const RestaurantMenu = () => {
  const [table, setTable] = useState<string>();
  const [link, setLink] = useState<string>();

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
        <SelectCustom handleChange={setTable} />
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
            <AnchonCategories link={link} setLink={setLink} generateAnchor={generateAnchor} />
            <Category generateAnchor={generateAnchor}/>
          </>
        )}
      </Space>
    </Card>
  );
};

export default RestaurantMenu;
