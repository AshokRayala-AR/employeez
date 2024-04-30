import React, {useState} from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Header from "../header/Header";
import Next from "../../ui/nextbutton/Next";
import StyledTextInput from "../../ui/textinput/StyledTextInput";
import StyledDateInput from "../../ui/datebutton/StyledDateInput";
export default function PreviousWorkPage() {
  function inputHandler() {}
  const [isChecked, setIsChecked] = useState(false);
  function anotherDetailsHandler() {


  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Previous Work</Text>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Employer Name",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Role",
            }}
          />
        </View>
        <View>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: inputHandler,
              placeholder: "Department",
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
              keyboardType: "number-pad",
              onChangeText: inputHandler,
              placeholder: "Current Package",
            }}
          />
        </View>
      </View>
      <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>Currently Working Here</Text>
        </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Next" />
        <Next btnName="Skip" />
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "flex-start",
    width: "78%",

  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    marginRight: 8,
  },
  checked: {
    backgroundColor: "#EA4080",
    borderColor: "#EA4080",
  },
  checkboxLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    
  },
});
