import React from "react";
import { Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type MeuBotaoProps = {
    titulo: string;
    onPress: () => void;
}

const MeuBotao : React.FC<MeuBotaoProps>=({titulo, onPress})=>{
    return(
        <Button onPress={onPress} title={titulo} color="#0000AA"></Button>
);

}

export default MeuBotao;