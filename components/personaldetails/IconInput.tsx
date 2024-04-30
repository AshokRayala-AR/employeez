import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function IconInput({
  textInputConfig,
  icon,
  iicon,
  uploadicon,
}) {
  const infoHandler = () => {};
  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={24} style={styles.icon} />
      <TextInput style={styles.textInput} {...textInputConfig} />
      {iicon && (
        <Icon name="information-circle-outline" size={24} style={styles.icon} />
      )}
      {uploadicon && (
        <Icon name="cloud-upload-outline" size={24} style={styles.icon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    width: "100%",
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
  },
  textInput: {
    width: "70%",
    fontSize: 16,
    color: "#000",
  },
});
