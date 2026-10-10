import "@fontsource-variable/fraunces/full.css";
import "@fontsource-variable/fraunces/full-italic.css";
import "@fontsource-variable/inter";
import "./theme.css";
import { DesignRoutes, type Design } from "../../shared/DesignRoutes";
import Home from "./Home";
import { Layout, Transition } from "./Layout";
import { Blog, BlogPost, ContentPage, NotFound } from "./Pages";

const design: Design = { Layout, Transition, Home, ContentPage, Blog, BlogPost, NotFound };

export default function Alpino() {
  return <DesignRoutes d={design} />;
}
