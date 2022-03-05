import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import api from "../../Services/Api";
import {TicketProps} from "../../Types"

type TypeProps = {
    _id: string | undefined;
}

export default function SpecificTicket({_id}: TypeProps){
    const [ticket, setTicket] = useState<TicketProps>()

    api.get(`/getbyid/${_id}`).then(
        ({data}) => setTicket(data.getTicketId)
    ).catch((error) => {
        console.log('error')
    })

    const activate = React.useEffect(()=>{
        activateTicket()
    }, [])

    
    const activateTicket = () => {
        api.put(`authenticateticket/${_id}`).then(
            (response) => {console.log(response.status)}
        ).catch((response)=> {
            response.status
        })
    }

    return (
        <View>
            <Text> Specific Ticket </Text>
            <Text> Event Name: { ticket?.event } </Text>
            <Text> Ticket Owner By CPF: {ticket?.cpf} </Text>
            <Text> Is Active: {ticket?.active} </Text>
            <Text> Buy At: {ticket?.createdAt} </Text>
            
            {ticket?.active 
                ? <Text> Already active </Text>
                : <Button title="Active now" onClick={activate}/>
            }
        </View>
    )
}