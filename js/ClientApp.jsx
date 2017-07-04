import React from "react"; // We need import React everywhere we use jsx
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const FourOhFour = () => <h1>404</h1>;

// BrowserRouter is a high order component, it encapuslates behaviour, not markup, it handles the routes
// BrowserRouter is more SEO friendly than HashRouter
// Switch make only one component to be rendered and not all matching (think in 'break')
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("app"));
