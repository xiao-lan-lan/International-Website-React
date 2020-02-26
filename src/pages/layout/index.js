import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "../Home";
import { Route } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      <Route path="/" component={Home} />
      <Footer />
    </div>
  );
}
export default Layout;
