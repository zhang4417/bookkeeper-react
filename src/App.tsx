import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Money from "view/Money";
import NoMatch from "view/NoMatch";
import Statistics from "view/Statistics";
import Tags from "view/Tags";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route exact path="/">
            <Statistics />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App


