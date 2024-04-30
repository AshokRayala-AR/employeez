import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Header from "../header/Header";
import Next from "../../ui/nextbutton/Next";
import StyledTextInput from "../../ui/textinput/StyledTextInput";
import StyledDateInput from "../../ui/datebutton/StyledDateInput";
export default function EducationalDetails() {
  function inputHandler() {}
  function anotherDetailsHandler() {

  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add your educational details</Text>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "College Name",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "University",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Course",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: 6,
            marginBottom: 6,
          }}
        >
          <StyledDateInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Start Date",
            }}
            icon=""
          />
          <StyledDateInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "End Date",
            }}
            icon=""
          />
        </View>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Percentage",
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Next" />
      </View>
      <Pressable onPress={anotherDetailsHandler}>
      <Text style={{ color: 'white',fontSize: 20, fontWeight :"600", textDecorationLine: "underline" }}>Add Another</Text>
    </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
  },
  content: {
    width: "80%",
    gap: 6,
  },
  buttonContainer: {
    width: "80%",
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginBottom: 16,
  },
});
