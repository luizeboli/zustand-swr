import React from "react";
import { queryCache } from "react-query";
import { useTicketList } from "./queries";

const TicketList = () => {
  const { isLoading, error, data } = useTicketList();

  if (isLoading) {
    return <h1>Loading TicketList...</h1>;
  }

  if (error) {
    return <h1>Error TicketList...</h1>;
  }

  console.log({ data }, "ticketlist response");

  return (
    <>
      <h1>TicketList</h1>
      <button
        onClick={() => console.log(queryCache.getQueryData("inbox_count"))}
      >
        Get Tickets Count From Sidebar
      </button>
    </>
  );
};

export default TicketList;
