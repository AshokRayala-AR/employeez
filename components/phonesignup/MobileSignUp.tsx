import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import StyledTextInput from "../../ui/textinput/StyledTextInput";
import NextButton from "../../ui/nextbutton/StyledNextButton";
import Header from "../header/Header";
import EnterDetailText from "../../ui/enterdetailtext/EnterDetailText";
import SocialSignUpText from "../sociallogin/SocialSignUpText";
import Next from "../../ui/nextbutton/Next";
export default function MobileSignUp() {
  function numberHandler() {}
  function handleloginPress() {}
  function emailHandler() {}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.input}>
        <EnterDetailText
          title="Enter Your Phone Number"
          subtitle="Enter phone number. You can always change it later."
        />
        <View style={styles.inputdiv}>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "number-pad",
              onChangeText: numberHandler,
              placeholder: "+91 phone number",
              maxLength: 10,
            }}
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailText
          title="Enter Your Email"
          subtitle="Enter email id, You can always change it later."
        />
        <View style={[styles.inputdiv, styles.inputmarg]}>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "email",
              onChangeText: emailHandler,
              placeholder: "abc@gmail.com",
            }}
          />
        </View>
      </View>

      <View style={[{ width: "100%" }, styles.buttondiv]}>
        {/* <NextButton btnName="NEXT" /> */}
        <Next btnName="NEXT"/>

        <View style={styles.signupTextContainer}>
          <SocialSignUpText
            firstline="Already have an account?"
            secondline="login"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    // flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    gap: 12,
  },
  inputmarg: {
    marginBottom: 54,
  },
  buttondiv: {
    flex: 2,
    alignItems: "flex-start",

    marginTop: 24,
  },
  inputdiv: {
    width: "100%",
  },
  signupTextContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
    justifyContent: "center",
    marginTop: 8,
  },
  signupButton: {
    marginLeft: 5,
  },
});
