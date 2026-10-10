import "@fontsource-variable/dm-sans";
import "../simple/theme.css";
import { DesignRoutes, type Design } from "../../shared/DesignRoutes";
import Home from "../simple/Home";
import { makeLayout, Transition } from "../simple/Layout";
import { Blog, BlogPost, ContentPage, NotFound } from "../simple/Pages";

const design: Design = { Layout: makeLayout({ id: "fresco", hero: "form" }), Transition, Home, ContentPage, Blog, BlogPost, NotFound };

export default function Fresco() {
  return <DesignRoutes d={design} />;
}
