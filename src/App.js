import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Pages
const Counter = lazy(() => import("./pages/counter"));
const Index = lazy(() => import("./pages/index"));
const Posts = lazy(() => import("./pages/posts"));

// Components
const loading = () => <p>Loading...</p>;

function App() {
  return (
    <Suspense fallback={loading()}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/counter" component={Counter} />
        <Route path="/counter" component={Counter} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Suspense>
  );
}

export default App;
