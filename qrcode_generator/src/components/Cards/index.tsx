import React from "react";
import QRCodeGenerator from "../QRCode";

// the props is the params will you receive;
type props = {
    event?: string;
    cpf?: string;
}

// Here we set the carts with the components with you want to change, just follow the model;
export default function Cards({ cpf, event}: props){
return (
        <div>
            <div>
                <h3> event name: {event} | </h3>
                <h3> | cpf: {cpf} </h3>   
            </div>
        </div>
    )
};
