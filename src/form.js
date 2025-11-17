import React from "react";
import { Form,Button } from "react-bootstrap";
import Pets from "./pets";
function FormA(){
    // Adoption form
    return(
        <>
        <Form style={{width: "300px", margin: "20px auto"}} id="form" className="form-container">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="fname" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Choose a Pet</Form.Label>
                <Form.Select >
                    <option>none</option>
                    {Pets.map((pet)=> (<option value={Pets.name}>{pet.name}</option>))}
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </>
    );
}
// Contains controlled inputs and Bootstrap form groups
// Select menu dynamically filled from pets.js via map()

export default FormA;
