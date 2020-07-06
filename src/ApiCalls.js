import React from "react";
import { apisData } from "./apisData";
import { Link } from "react-router-dom";

const ApiCalls = () => {
  return (
    <div>
      <ul>
        {apisData.map(api => (
          <li key={api.id}>
           <Link to={`/apis/${api.id}`}>{api.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCalls;

  

