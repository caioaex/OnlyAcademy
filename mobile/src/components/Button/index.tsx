import React from "react";
import { ButtonText, ButtonView } from "./style";

export interface Ibutton {
    title?: string,
    backgroundColor?: string,
    onPress?: Function
}

export function Button(props: Ibutton) {
    return(
        <ButtonView onPress={props.onPress} backgroundColor={props.backgroundColor}>
            <ButtonText>{props.title}</ButtonText>
        </ButtonView>
    )
}