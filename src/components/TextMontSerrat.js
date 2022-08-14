import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function TextMontSerrat({ children, style }){
    let styleText = estilo.text;

    if (style?.fontWeight ===  'bold') {
        styleText = estilo.textoNegrito;
    }

    return <Text style={ [style, styleText] }>{ children }</Text>
}

const estilo = StyleSheet.create({
    text:{
       fontFamily: 'MontserratRegular',
       fontWeight: 'normal'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal'
    }
});