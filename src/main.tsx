import "core-js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { App } from "./components/app";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.querySelector("#root"),
);
