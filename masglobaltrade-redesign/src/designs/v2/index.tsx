import "@fontsource/bebas-neue";
import "@fontsource-variable/oswald";
import "@fontsource-variable/archivo";
import "./theme.css";
import { DesignRoutes, type Design } from "../../shared/DesignRoutes";
import Home from "./Home";
import { Layout, Transition } from "./Layout";
import { Blog, BlogPost, ContentPage, NotFound } from "./Pages";

const design: Design = { Layout, Transition, Home, ContentPage, Blog, BlogPost, NotFound };

export default function V2() {
  return <DesignRoutes d={design} />;
}
