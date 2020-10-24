import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { CreateTag } from "view/CreateTag";
import EditTag from "view/EditTag";
import Money from "view/Money";
import NoMatch from "view/NoMatch";
import Statistics from "view/Statistics";
import Tags from "view/Tags";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <EditTag />
          </Route>
          <Route exact path="/money">
            <Money />
          </Route>
          <Route exact path="/money/createTag">
            <CreateTag />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Redirect from='/' to='/money' />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App


