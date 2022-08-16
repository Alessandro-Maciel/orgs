import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";
import Itens from "./components/Itens";

export default function Cesta({topo, detalhe, itens}){
    return <ScrollView>
        <Topo { ...topo }/>
        <View style={style.cesta}>
            <Detalhe { ...detalhe }/>
            <Itens { ...itens }/>
        </View>
    </ScrollView>
}

const style = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
});