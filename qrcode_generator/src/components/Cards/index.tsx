import React, { useEffect, useState } from "react";

// the props is the params will you receive;
type props = {
    event: string;  
    cpf: string;
}

// Here we set the carts with the components with you want to change, just follow the model;
export default function Cards({ event, cpf }: props){
    

    return (
            <div>
                <div>
                    <h3> event name: </h3>
                    {event}
                    <h3> cpf: </h3>
                    {cpf}   
                </div>
            </div>
        )
};


