import React from "react";
import { Category } from "../../configs/data-type";

// type Props = {};

const TabItem: React.FC<{
  tab: Category | "all";
  handleFilterCategory: Function;
  active: Category | "all";
}> = ({ tab, handleFilterCategory, active }) => {
  let className =
    "capitalize cursor-pointer hover:text-light-900 hover:dark:text-zeit-100";
  if (active === tab) {
    className +=
      " text-light-900 dark:text-zeit-100 bg-gray-100 px-2 rounded-lg";
  } else {
    className += " text-white";
  }
  return (
    <li className={className} onClick={() => handleFilterCategory(tab)}>
      {tab}
    </li>
  );
};

const ProjectsTabBar: React.FC<{
  handleFilterCategory: Function;
  active: Category;
}> = (props) => {
  return (
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
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
