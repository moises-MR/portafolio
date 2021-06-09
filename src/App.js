import React, { Fragment } from "react";
import Habiliades from "./components/Habiliades";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Proyectos from "./components/Proyectos";
import Footer from "./components/Footer";


function App() {
  return (
    <Fragment>
      <Habiliades />
      <AboutMe />
      <Proyectos/>

      <Contact/>

      <Footer/>
    </Fragment>
  );
}

export default App;
