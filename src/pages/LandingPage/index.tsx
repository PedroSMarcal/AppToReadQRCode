import React from 'react'
import { Button, Text, View } from 'react-native'
import StyledButton from '../../components/Buttons'

export default function LandingPage({navigation}){
    return (
        <View>
            <Button title='Sobre' onPress={() => navigation.navigate('Ticket')}/>
            <Button title='QRCode' onPress={() => navigation.navigate('QRCode')}/>

            <Text>
                Landing Page
            </Text>
        </View>
    )
}