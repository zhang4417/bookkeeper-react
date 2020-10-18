import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/tags">tags</Link>
          </li>
          <li>
            <Link to="/money">money</Link>
          </li>
          <li>
            <Link to="/statistics">statistics</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

function Tags() {
  return (
    <>
      <h1>tags</h1>
      <Nav />
    </>
  )
}
function Money() {
  return (
    <>
      <h1>money</h1>
      <Nav />
    </>
  )
}
function Statistics() {
  return (
    <>
      <h1>statistics</h1>
      <Nav />
    </>
  )
}
function NoMatch() {
  return (<h1>404</h1>)
}

export default App


