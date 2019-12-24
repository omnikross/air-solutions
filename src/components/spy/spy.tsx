import React from "react";
import { withRouter, RouteComponentProps, StaticContext } from "react-router";
import { History } from "history";

let globalHistory: History;

class Spy extends React.Component<RouteComponentProps<{}, StaticContext, {}>> {
  constructor(props: any) {
    super(props);
    globalHistory = props.history;
  }

  render() {
    return null;
  }
}

const ReactRouterGlobalHistory = withRouter(Spy);

function getHistory() {
  if (!globalHistory) {
    throw new Error(
      "No history Object. You probably forgot to mount ReactRouterGlobalHistory from this package.",
    );
  }

  return globalHistory;
}

export { ReactRouterGlobalHistory, getHistory };