import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Cards from "../../components/Cards";

// tickets params
type ticketProps = {
    _id: string;
    event: string;
    cpf: string;
}

// Here we have the LandingPage of our app, use to map all the tickets and show then, if you click on a ticket you should be redirect to a single page with the card, and QRCode
export default function LandingPage(){
    //get all the tickets using the NodeJS API
    const [ticket, setTicket] = useState<ticketProps[]>([]);
    
    useEffect(() => {
        api.get('/getall').then(
            ({data}) => {
                setTicket(data.getTickets);   
            }).catch((error) => {console.log('no tickets')});
    }, []);

    console.log(ticket)

    return (
        <div>
            <button>
                {ticket?.map((ticket) => {
                    <Cards key={ticket._id} event={ticket.event} cpf={ticket.cpf} />
                })}
            </button>
            <hr style={{width: 250, color: "blue", height: 1, backgroundColor: "blue"}}/>
            {/* <button >
                <Cards event={"teste"} cpf={"123456"} />
            </button>     */}
        </div>
    )
}

// This code was to map all the ocorrunce come from backend 