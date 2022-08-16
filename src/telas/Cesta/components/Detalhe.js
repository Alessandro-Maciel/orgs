import React from "react";
import { StyleSheet, View, Image} from "react-native";

import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

export default function Detalhe({nome, logoFazenda, nomeFazenda, descricao, preco, botao}){
    return <>
        <Texto style={style.nome}>{nome}</Texto>
        <View style={style.fazenda}>
            <Image source={logoFazenda} style={style.imagemFazenda}/>
            <Texto style={style.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={style.descricao}>{ descricao }</Texto>
        <Texto style={style.preco}>{ preco }</Texto>
        <Botao style={[style.botao, style.textoBotao]}>{botao}</Botao>
    </>
}

const style = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold", 
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },  
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
    }
});