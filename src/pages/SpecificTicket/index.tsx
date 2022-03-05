import React from "react";
import { Text, View } from "react-native";

export default function SpecificTicket({ route }){
    return (
        <View>
            <Text> Specific Ticket </Text>
            
            <Text> Event Name: {route.params?.nome } </Text>
            <Text> Ticket Owner By CPF:  </Text>
            <Text> Is Active: </Text>
        </View>
    )
}