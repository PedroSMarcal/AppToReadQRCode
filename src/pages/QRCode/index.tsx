import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Scanner from "../../components/Scanner";
import api from "../../Services/Api";
import { TicketProps } from "../../Types";
import SpecificTicket from "../../components/SpecificTicket";

type constType = {
    type?: string;
}
type constData = {
    data?: string;
}

type types = {
    type: string;
    data: string;
}

export default function QRCode(){
    const [ModalVisible, setModalVisible] = useState(false);
    const [typeRes, setTypeRes] = useState<constType | undefined>();
    const [dataRes, setDataRes] = useState<constData | undefined>();
    const [ticket, setTicket] = useState<TicketProps>();


    const onCodeScanned = (type: constType, data: constData) => {
        setTypeRes(type);
        setDataRes(data);
        setModalVisible(false);
        
    }

    api.get(`/getbyid/${dataRes}`).then(
        ({data}) => setTicket(data.getTicketId)
    ).catch((error) => {
        console.log('error')
    })

    return (
        <View style={styles.container}>
            <Modal
                visible={ModalVisible}
                transparent = {true}
                animationType = "fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                    <Scanner onCodeScanned={onCodeScanned}/>
                    <Button title="Cancel" onPress={() => setModalVisible(false)}/>
                </View>
            </Modal>

            <StatusBar />
            <SpecificTicket _id={ticket?._id}/>

            <Button title="Open Scanner" onPress={() => setModalVisible(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
    }, 
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lightgrey"
    }
})