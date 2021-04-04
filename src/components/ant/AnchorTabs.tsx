import React from 'react';
import { Tabs, Anchor } from 'antd';

const { Link: AnchorLink } = Anchor;
const { TabPane } = Tabs;

export type AnchorTabsProps = {
  links: {
    key: string;
    title: string;
  }[];
  activeLink: string;
  setActiveLink: (arg: string) => void;
};

export const AnchorTabs: React.FunctionComponent<AnchorTabsProps> = ({
  links,
  activeLink,
  setActiveLink,
}) => {
  return (
    <Anchor onChange={setActiveLink} className="ant-anchor-tabs">
      <Tabs activeKey={activeLink}>
        {links.map(({ key, title }, i) => (
          <TabPane key={key} tab={<AnchorLink href={`#${key}`} title={title} />}></TabPane>
        ))}
      </Tabs>
    </Anchor>
  );
};
