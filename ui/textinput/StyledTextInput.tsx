import { TextInput, View, StyleSheet } from "react-native";
import React from "react"
export default function StyledTextInput({textInputConfig}) {

    return (
      <View>
        <TextInput style={styles.textstyle} {...textInputConfig} />
      </View>
    );
}

const styles = StyleSheet.create({ 
    textstyle: {
    borderRadius: 50, 
    padding: 10,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width:'100%',
    marginVertical:8
    }})
