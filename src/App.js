import React, { Fragment } from "react";
import Home from "./component/Home/Home";
import Navs from "./component/Navs/Navs";

import './App.css';
import Call from "./component/CallUs/Call";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <Call/>
      <Footer/>
    </Fragment>
  );
}

export default App;
