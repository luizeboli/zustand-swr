import React from "react";
import { useQuery } from "react-query";
import api from "../../api";

// Sync store
import useSidebar from "../../store";

// Async store
import { useInboxCount } from "./queries";

const Sidebar = () => {
  const { isLoading, error, data } = useInboxCount();
  const { opened, toggleSidebar } = useSidebar();

  if (isLoading) {
    return <h1>Loading sidebar...</h1>;
  }

  if (error) {
    return <h1>Error sidebar...</h1>;
  }

  console.log({ data }, "sidebar data...");

  return (
    <>
      <h1>Sidebar: Inbox Count ({data.data.Total})</h1>
      <h4>Sidebar is opened: {opened.toString()}</h4>
      <button onClick={() => toggleSidebar()}>Toggle Sidebar</button>
    </>
  );
};

export default Sidebar;
