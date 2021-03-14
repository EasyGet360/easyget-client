import {
    Tabs,
    Anchor,

} from "antd";
import {restaurant_menu} from '../../Models/instances'
const { Link: AnchorLink } = Anchor;
const { TabPane } = Tabs;

export const AnchonCategories = (props:any) => {
  return (
    <Anchor onChange={props.setLink} className="ant-anchor-tabs">
    <Tabs activeKey={props.link}>
      {restaurant_menu.map((category, i) => (
        <TabPane
          key={props.generateAnchor(`${category.name}_${i}`)}
          tab={
            <AnchorLink
              href={`#${props.generateAnchor(`${category.name}_${i}`)}`}
              title={category.name}
            />
          }
        ></TabPane>
      ))}
    </Tabs>
  </Anchor>
  );
};

