import {
  getMuiTheme,
  lightBaseTheme,
  MuiThemeProvider,
} from "material-ui/styles";
import * as React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter,
} from "react-router-dom";
import * as pages from "../pages";
import * as style from "./app.scss";

const muiTheme = getMuiTheme(lightBaseTheme);

interface AppProps extends RouteComponentProps<{}> {
}

interface AppState {
}

export const App = withRouter(class extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className={style.main}>
          <Switch>
            <Route exact path="/" component={pages.HomePage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
});
