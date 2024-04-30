// import React, { useState } from "react";
// import { View, StyleSheet, Text, Pressable } from "react-native";
// import StyledTextInput from "../../ui/textinput/StyledTextInput";
// import NextButton from "../../ui/nextbutton/StyledNextButton";
// import Header from "../header/Header";
// import EnterDetailText from "../../ui/enterdetailtext/EnterDetailText";
// import SocialSignUpText from "../sociallogin/SocialSignUpText";

// export default function MobileSignUp() {
//   function numberHandler() {}
//   function handleloginPress() {}
//   function emailHandler() {}
//   const [isChecked, setIsChecked] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View style={styles.input}>
//         <EnterDetailText
//           title="Enter Your Email"
//           subtitle="Enter your mail id, You can always change it later."
//         />
//         <View style={styles.inputdiv}>
//           <StyledTextInput
//             textInputConfig={{
//               keyboardType: "email",
//               onChangeText: emailHandler,
//               placeholder: "abc@gmail.com",
//             }}
//           />
//         </View>
//       </View>
//       <View style={[styles.input, { marginTop: 24 }]}>
//         <EnterDetailText
//           title="Enter Password"
//           subtitle="6 or more characters."
//         />
//         <View style={[styles.inputdiv]}>
//           <StyledTextInput
//             textInputConfig={{
//               keyboardType: "default",
//               onChangeText: (text) => setPassword(text),
//               placeholder: "password",
//               secureTextEntry: true,
//               minLength: 6,
//             }}
//           />
//         </View>
//         <View style={[styles.inputdiv, styles.inputmarg, { marginTop: 24 }]}>
//           <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}>
//             Re-Enter Password
//           </Text>
//           <StyledTextInput
//             textInputConfig={{
//               keyboardType: "default",
//               onChangeText: (text) => setConfirmPassword(text),
//               placeholder: "password",
//               secureTextEntry: true,
//               minLength: 6,
//             }}
//           />
//         </View>

//         <View style={styles.checkboxContainer}>
//           <Pressable
//             style={[styles.checkbox, isChecked && styles.checked]}
//             onPress={() => setIsChecked(!isChecked)}
//           />
//           <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
//         </View>
//       </View>

//       {isChecked && password === confirmPassword && password.length >= 6 && (
//         <View style={[{ width: "100%" }, styles.buttondiv]}>
//           <NextButton btnName={"NEXT"} />
//           <View style={styles.signupTextContainer}>
//             <SocialSignUpText
//               firstline="Already have an account?"
//               secondline="login"
//             />
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     justifyContent: "center",
//     alignItems: "flex-start",
//     width: "90%",
//     gap: 12,
//   },
//   inputmarg: {
//     marginBottom: 54,
//   },
//   buttondiv: {
//     flex: 2,
//     alignItems: "flex-start",
//     marginTop: 24,
//   },
//   inputdiv: {
//     width: "100%",
//   },
//   signupTextContainer: {
//     flexDirection: "row",
//     marginBottom: 10,
//     width: "100%",
//     justifyContent: "center",
//     marginTop: 8,
//   },
//   signupButton: {
//     marginLeft: 5,
//   },
//   checkboxContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 16,
//   },
//   checkbox: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     borderWidth: 2,
//     borderColor: "#FFFFFF",
//     marginRight: 8,
//   },
//   checked: {
//     backgroundColor: "#EA4080",
//     borderColor: "#EA4080",
//   },
//   checkboxLabel: {
//     color: "#FFFFFF",
//     fontSize: 16,
//   },
// });

import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import StyledTextInput from "../../ui/textinput/StyledTextInput";
import NextButton from "../../ui/nextbutton/StyledNextButton";
import Header from "../header/Header";
import EnterDetailText from "../../ui/enterdetailtext/EnterDetailText";
import SocialSignUpText from "../sociallogin/SocialSignUpText";

export default function MobileSignUp() {
  function numberHandler() {}
  function handleloginPress() {}
  function emailHandler() {}
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.input}>
        <EnterDetailText
          title="Enter Your Email"
          subtitle="Enter your mail id, You can always change it later."
        />
        <View style={styles.inputdiv}>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "email",
              onChangeText: emailHandler,
              placeholder: "abc@gmail.com",
            }}
          />
        </View>
      </View>
      <View style={[styles.input, { marginTop: 24 }]}>
        <EnterDetailText
          title="Enter Password"
          subtitle="6 or more characters."
        />
        <View style={[styles.inputdiv]}>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: (text) => setPassword(text),
              placeholder: "password",
              secureTextEntry: true,
              minLength: 6,
            }}
          />
        </View>
        <View style={[styles.inputdiv, styles.inputmarg, { marginTop: 24 }]}>
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}>
            Re-Enter Password
          </Text>
          <StyledTextInput
            textInputConfig={{
              keyboardType: "default",
              onChangeText: (text) => setConfirmPassword(text),
              placeholder: "password",
              secureTextEntry: true,
              minLength: 6,
            }}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checked]}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
        </View>
      </View>

      <View style={[{ width: "90%" }, styles.buttondiv]}>
        <NextButton btnName={"NEXT"} disabled={!isChecked} style={{ opacity: isChecked ? 1 : 0.6 }} />
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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
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
