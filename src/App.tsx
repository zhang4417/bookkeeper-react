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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/other">other</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
      </nav>
    </Router>
  );
}

function About() {
  return (<h1>about</h1>)
}
function Other() {
  return (<h1>other</h1>)
}
function Home() {
  return (<h1>home</h1>)
}
function NoMatch() {
  return (<h1>404</h1>)
}

export default App


