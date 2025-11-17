import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./navbar";
import Petlist from"./petlist";
import FormA  from "./form";
import Pets from "./pets";

// Root component of the application
// Imports Navbar, PetList and Form components + Bootstrap styling


function App() {
  return (
    <>
    {/* displaying the navbar */}
    <NavBar />

    <br/><br/>
    {/* heading */}
    <h1 className="text-center mt-4" id="cardpets">🐾Adopt a Pet🐾</h1>

    {/*displaying the pets cards*/}
    <Petlist />

    {/* displaying the adoption form*/}
    <FormA />
      
    </>
  );
}

export default App;
