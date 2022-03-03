import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import QRCodeGenerator from '../../components/QRCode'
import api from '../../services/api'

type props = {
    id: string;
}

// This page will present the QRCode, because it will will focus on the ID from the object
export default function TicketPage({ id }: props){
    // get just the ticket needed usig the id
    const [ticket, setTicket] = useState([])

    useEffect(() => {
        api.get(`/getbyid/${id}`).then(
            ({data}) => {
                setTicket(data)
            }
        ).catch((error) => {console.log('Could not find the ID')})
    })
    
    return (
        <div>
            <div className="card">
                <Cards />
            </div>
            <div className="qr">
                <QRCodeGenerator id={'teste'}/>
            </div>
        </div>
    )
}