import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type props = {
    children: string;
}

export default function StyledButton({children}: props){
    return (
    <>
        <TouchableOpacity>
            <Text>
                {children} 
            </Text>
        </TouchableOpacity>
    </>
    )
}