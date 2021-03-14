import {
    Select,
    Badge,
    Row,
    Col,
} from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Option } = Select;

export const SelectCustom = (props:any) => {
  return (
    <Row gutter={10} align="middle" justify="space-between">
      {console.log("🚀 ~ file: SelectCustom.tsx ~ line 11 ~ SelectCustom ~ props", props)}
    <Col>
      <Select
        placeholder="¿En qué mesa estás?"
        size="large"
        onChange={(value) => props.handleChange(value.toString())}
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
  );
};

