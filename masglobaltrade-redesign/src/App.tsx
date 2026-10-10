import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import Hub from "./Hub";
import Switcher from "./Switcher";

const V1 = lazy(() => import("./designs/v1"));
const V2 = lazy(() => import("./designs/v2"));
const V3 = lazy(() => import("./designs/v3"));
const Alpino = lazy(() => import("./designs/alpino"));
const Pulito = lazy(() => import("./designs/pulito"));
const Concessionaria = lazy(() => import("./designs/concessionaria"));
const Diretto = lazy(() => import("./designs/diretto"));
const Notte = lazy(() => import("./designs/notte"));
const Fresco = lazy(() => import("./designs/fresco"));
const Lago = lazy(() => import("./designs/lago"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Switch>
          <Route path="/notte" nest>
            <Notte />
          </Route>
          <Route path="/fresco" nest>
            <Fresco />
          </Route>
          <Route path="/lago" nest>
            <Lago />
          </Route>
          <Route path="/pulito" nest>
            <Pulito />
          </Route>
          <Route path="/concessionaria" nest>
            <Concessionaria />
          </Route>
          <Route path="/diretto" nest>
            <Diretto />
          </Route>
          <Route path="/v1" nest>
            <V1 />
          </Route>
          <Route path="/v2" nest>
            <V2 />
          </Route>
          <Route path="/v3" nest>
            <V3 />
          </Route>
          <Route path="/alpino" nest>
            <Alpino />
          </Route>
          <Route component={Hub} />
        </Switch>
      </Suspense>
      <Switcher />
    </>
  );
}
