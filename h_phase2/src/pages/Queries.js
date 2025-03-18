import React from "react";
import Sidebar from "../components/Sidebar";
import QueryTabs from "../components/QueryTabs";

function Queries() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <QueryTabs />
      </div>
    </div>
  );
}

export default Queries;
