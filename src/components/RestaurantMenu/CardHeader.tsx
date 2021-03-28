import React from 'react';
import { Card, Typography } from 'antd';

import { InstagramOutlined } from '@ant-design/icons';
import data from '../../data.json';

const { Link } = Typography;

export const CardHeader: React.FunctionComponent = () => {
  return (
    <Card
      cover={
        <img alt="example" style={{ maxHeight: '25vh', objectFit: 'cover' }} src={data['bg-img']} />
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
    ></Card>
  );
};
