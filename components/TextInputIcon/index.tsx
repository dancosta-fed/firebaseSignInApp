import React from "react";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { TextInput, View } from "react-native";


export function TextInputIcon({ icon, ...rest }) {
    return (
        <View style={styles.inputContainer}>
            { React.createElement(icon, { size: 24, color: theme.colors.secondary }) }
            <TextInput {...rest} style={[{ marginLeft: 10 }, rest.style]} />
        </View>
    )
}