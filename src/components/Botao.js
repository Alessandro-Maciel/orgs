import React from "react";
import { TouchableOpacity } from "react-native";

import Texto from "./Texto";

export default function Botao({children, style}){
    return <TouchableOpacity style={style[0]}>
        <Texto style={style[1]}>{children}</Texto>
    </TouchableOpacity>
}
