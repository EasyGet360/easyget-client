import { Fragment, useCallback, useState } from "react";
import {
  Card,
  Typography,
  Anchor,
} from "antd";

import { ShoppingCartOutlined, InstagramOutlined } from "@ant-design/icons";
import data from "../../data.json";

const { Link, Title, Paragraph } = Typography;
const { Link: AnchorLink } = Anchor;


export const CardHeader = () => {
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
    </Card>
  );
};

