import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styledButton } from './style'

export default function StyledButton({children, style}){
    let styles = styledButton.buttonGray;

    if (style?.backgroundColor === 'green'){
        styles = styledButton.buttonGreen;
    }
    else if (style?.backgroundColor === 'gray'){
        styles = styledButton.buttonGreen;
    }
    else (style?.backgroundColor === 'red'){
        styles = styledButton.buttonRed;
    }

    return (
    <>
        <TouchableOpacity> {children} </TouchableOpacity>
    </>
    )
}