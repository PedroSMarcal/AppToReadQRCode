import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";
import { LandingStyles } from "./style";

// tickets params
type ticketProps = {
    _id: string;
    event: string;
    cpf: string;
    active: boolean;
}

// Here we have the LandingPage of our app, use to map all the tickets and show then, if you click on a ticket you should be redirect to a single page with the card, and QRCode
export default function LandingPage(){
    //get all the tickets using the NodeJS API    
    const [ticket, setTicket] = useState<ticketProps[]>([]);
    
    const getTickets = () => {
        api.get('/getall').then(
            ({data}) => {
                setTicket(data.getTickets);   
            }).catch((error) => {console.log('no tickets')
    })}
    
    useEffect(() => {
        getTickets();
    }, [])

    return (
            <LandingStyles>
                <div>
                    Welcome all the tickets who needs activation it'll be showed here;
                </div>
    
                {ticket?.map((ticket) => (
                    <Link to={`/${ticket._id}`}>
                        <Cards 
                        key={ticket._id} event={ticket.event} cpf={ticket.cpf}/>
                    </Link>
                ))}
            </LandingStyles>
    )
}