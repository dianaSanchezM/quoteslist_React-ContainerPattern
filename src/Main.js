import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import QuotesListContainer from "./QuotesListContainer";
import { apisData } from "./apisData";
import ApiCalls from "./ApiCalls";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/apis" component={ApiCalls} />
        <Route
          path="/apis/:apiId"
          render={({ match }) => {
            const list = apisData.find(a => a.id === match.params.apiId);
            return <QuotesListContainer api = {list.url}  authorName = {list.authorName} />;
          }}
        />
      </Switch>
    </main>
  );
};

export default Main;
