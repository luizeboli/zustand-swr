import React from "react";
import TicketList from "./containers/TicketList";
import Sidebar from "./containers/Sidebar";
import { ReactQueryConfigProvider } from "react-query";

const reactQueryConfig = {
  queries: {
    refetchOnWindowFocus: false,
  },
};

function App() {
  return (
    <ReactQueryConfigProvider config={reactQueryConfig}>
      <div className="App">
        <Sidebar />
        <TicketList />
      </div>
    </ReactQueryConfigProvider>
  );
}

export default App;
