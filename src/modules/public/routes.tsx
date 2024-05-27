import React from "react";

const About = React.lazy(() => import("./views/About"));
const Cart = React.lazy(() => import("./views/Cart"));
const Checkout = React.lazy(() => import("./views/Checkout"));
const Contact = React.lazy(() => import("./views/Contact"));
const Home = React.lazy(() => import("./views/Home"));
const Notfound = React.lazy(() => import("./views/Notfound"));
const Privacy = React.lazy(() => import("./views/Privacy"));
const Products = React.lazy(() => import("./views/Products"));
const SingleProduct = React.lazy(() => import("./views/SingleProduct"));
const Terms = React.lazy(() => import("./views/Terms"));
const TrackOrder = React.lazy(() => import("./views/TrackOrder"));

const routes = [
  {
    name: "Home",
    layout: "/",
    path: "home",
    icon: "",
    component: <Home />,
  },
  {
    name: "Single Products",
    layout: "/",
    path: "products/:productId",
    icon: "",
    component: <SingleProduct />,
  },
  {
    name: "Products",
    layout: "/",
    path: "products",
    icon: "",
    component: <Products />,
  },
  {
    name: "Cart",
    layout: "/",
    path: "cart",
    icon: "",
    component: <Cart />,
  },
  {
    name: "Checkout",
    layout: "/",
    path: "checkout",
    icon: "",
    component: <Checkout />,
  },
  {
    name: "Track Order",
    layout: "/",
    path: "track-order",
    icon: "",
    component: <TrackOrder />,
  },
  {
    name: "About",
    layout: "/",
    path: "about",
    icon: "",
    component: <About />,
  },
  {
    name: "Privacy",
    layout: "/",
    path: "privacy",
    icon: "",
    component: <Privacy />,
  },
  {
    name: "Terms",
    layout: "/",
    path: "terms",
    icon: "",
    component: <Terms />,
  },
  {
    name: "Contact",
    layout: "/",
    path: "contact",
    icon: "",
    component: <Contact />,
  },
  {
    name: "Notfound",
    layout: "/",
    path: "notfound",
    icon: "",
    component: <Notfound />,
  },
];

export default routes;
