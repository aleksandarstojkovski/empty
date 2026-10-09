import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Chooser from "./Chooser";

const V1 = lazy(() => import("./designs/v1"));
const V2 = lazy(() => import("./designs/v2"));
const V3 = lazy(() => import("./designs/v3"));

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <Switch>
        <Route path="/v1" nest>
          <V1 />
        </Route>
        <Route path="/v2" nest>
          <V2 />
        </Route>
        <Route path="/v3" nest>
          <V3 />
        </Route>
        <Route component={Chooser} />
      </Switch>
    </Suspense>
  );
}
