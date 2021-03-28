import React from 'react';
import { Tabs, Anchor } from 'antd';
import { restaurant_menu } from '../../models/instances';

const { Link: AnchorLink } = Anchor;
const { TabPane } = Tabs;

export type AnchorTabsProps = {
  link: string;
  setLink: (arg: string) => void;
  generateAnchor: (arg: string) => string;
};

export const AnchorTabs: React.FunctionComponent<AnchorTabsProps> = (props) => {
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
