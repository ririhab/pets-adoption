import React from "react";
import { Card,Button } from "react-bootstrap";
import pets from "./petlist";
function Cardp({name,type,age,desc,img}){
    // Card component for displaying each pet
    // Receives props using destructuring: name, type, age, desc, img
    return(
        <>
            <Card className="card-hover" style={{ width: '18rem', margin: '15px'}} >
                <Card.Img variant="top" src={img} alt={name} />
                    <Card.Body>
                        <Card.Title>{name}  {type}</Card.Title>
                        <Card.Text>age: {age}</Card.Text>
                        <Card.Text>{desc}</Card.Text>
                        <Button variant="primary" href="#form">Adopt!</Button>

                </Card.Body>
            </Card>
        
        </>
    );
}
// Includes defaultProps in case some data is missing
Cardp.defaultProps = {
    name: "Unknown",
    type: "Unknown",
    age:"N/A",
    desc:"Not available!",
    img:"/"
};
export default Cardp;