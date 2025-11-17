import React from "react";
import Cardp from "./card";
import Pets from "./pets";

// Petlist component
const Petlist = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {Pets.map((pet, index) => (<Cardp key={index} {...pet}/>))}
        </div>
    );
};
// Maps over Pets array and renders a Cardp component for each pet
export default Petlist;