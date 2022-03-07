import React, { useEffect, useState } from "react";
import { CardBox } from './style'

// the props is the params will you receive;
type props = {
    event: string;  
    cpf: string;
}

// Here we set the carts with the components with you want to change, just follow the model;
export default function Cards({ event, cpf }: props){
    

    return (
        <CardBox>
            <div>
                <p> event name: {event} </p>
                <p> cpf: {cpf} </p>
            </div>
        </CardBox>
        )
};


