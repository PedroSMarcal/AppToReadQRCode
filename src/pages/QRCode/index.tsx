import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Scanner from "../../components/Scanner";

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

    const onCodeScanned = (type: constType, data: constData) => {
        setTypeRes(type);
        setDataRes(data);
        setModalVisible(false);
    }

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

            {/* <Text> Chamarei a API para apresentar os dados </Text>
            <Text> E darei a opção para atualizar o estado do elemento</Text> */}

            <Text> Type: {typeRes} </Text>
            <Text> Data: {dataRes} </Text>

            <Button title="Open Scanner" onPress={() => setModalVisible(true)}/>
        </View>

        // <Scanner />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }, 
    modal: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "lightgrey"
    }
})