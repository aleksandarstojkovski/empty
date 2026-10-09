import "@fontsource/lilita-one";
import "@fontsource-variable/rubik";
import "./theme.css";
import { DesignRoutes, type Design } from "../../shared/DesignRoutes";
import Home from "./Home";
import { Layout, Transition } from "./Layout";
import { Blog, BlogPost, ContentPage, NotFound } from "./Pages";

const design: Design = { Layout, Transition, Home, ContentPage, Blog, BlogPost, NotFound };

export default function V3() {
  return <DesignRoutes d={design} />;
}
