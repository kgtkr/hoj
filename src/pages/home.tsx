import * as React from "react";
import {
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { getHTML } from "../models";
import {
  CircularProgress,
  List,
  ListItem
} from "material-ui";

interface HomePageProps extends RouteComponentProps<{}> {
}

interface HomePageState {
  data: string[] | null
}

export const HomePage = withRouter(class extends React.Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      data: null
    };

    (async () => {
      const $ = await getHTML("/problems");
      this.setState({
        data: Array.from($("table.smart-table>tbody>tr>td:nth-child(3)>div>a")).map(x => $(x).text())
      });
    })();
  }

  render() {
    return <div>
      <div>HOJの問題一覧(一部)</div>
      {this.state.data !== null
        ? <List>
          {this.state.data.map((x, i) => <ListItem key={i}>{x}</ListItem>)}
        </List>
        : <div><CircularProgress /></div>}
    </div>;
  }
});
