import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Cards from '../../components/Cards';
import QRCodeGenerator from '../../components/QRCode'
import api from "../../services/api";

type ticketprops = {
    _id: string;
    event: string;
    cpf: string;
    active: boolean;
}

// This page will present the QRCode, because it will will focus on the ID from the object
export default function TicketPage(){
    let { id } = useParams();

    const [ticket, setTicket] = useState<ticketprops>()

    const getOneTicket = () => {
        api.get(`/getbyid/${id}`).then(
            ({data}) => {
                setTicket(data.getTicketId);
            }).catch((error) => {console.log('no tickets')})
    }

    console.log(`/getbyid/${id}`)
    useEffect(() =>  {
        getOneTicket()
    }, [])

    return (
        <div>
            {ticket?.active ?
                <div>
                    <div> 
                        <Cards event={ticket.event} cpf={ticket.cpf} />
                    </div>
                    <div>
                        <QRCodeGenerator id={ticket._id}/>
                    </div>
                </div>
            : 
                <div>
                    <h3>Active Now</h3>
                    <QRCodeGenerator id={ticket?._id}/>
                </div>
            } 
        </div>
    )
}