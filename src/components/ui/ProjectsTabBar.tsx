import { FC } from "react";

import { Category } from "@configs/data-type";

const TabItem: FC<{
  tab: Category | "all";
  handleFilterCategory: Function;
  active: Category | "all";
}> = ({ tab, handleFilterCategory, active }) => {
  let className =
    "capitalize cursor-pointer hover:text-background";
  if (active === tab) {
    className +=
      " text-white bg-foreground px-2 rounded-lg";
  } else {
    className += " text-muted-foreground";
  }
  return (
    <li className={className} onClick={() => handleFilterCategory(tab)}>
      {tab}
    </li>
  );
};

const ProjectsTabBar: FC<{
  handleFilterCategory: Function;
  active: Category;
}> = (props) => {
  return (
    <div className="flex px-3 py-3 gap-x-3 overflow-x-auto list-none">
      <TabItem tab="all" {...props} />
      <TabItem tab="react" {...props} />
      <TabItem tab="django" {...props} />
      <TabItem tab="node" {...props} />
      <TabItem tab="python" {...props} />
      <TabItem tab="java" {...props} />
      <TabItem tab="firebase" {...props} />
    </div>
  );
};

export default ProjectsTabBar;
