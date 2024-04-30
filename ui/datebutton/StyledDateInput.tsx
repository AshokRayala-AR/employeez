// import React from "react";
// import { TextInput, View, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";

// export default function IconInput({ textInputConfig, icon }) {
//   return (
//     <View style={styles.inputContainer}>
//       <View style={styles.individual}>
//       <Icon name="calendar-outline" size={24} style={styles.icon} />
//         <TextInput style={styles.textInput} {...textInputConfig} />
//       </View>
//       <View style={styles.individual}>
//       <Icon name="calendar-outline" size={24} style={styles.icon} />
//         <TextInput style={styles.textInput} {...textInputConfig} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 50,
//     paddingHorizontal: 16,
//     backgroundColor: "#fff",
//     borderColor: "#000",
//     borderWidth: 1,
//     width: "100%",
//     // marginVertical: 8,
//     gap:6
//   },
//   individual:{
//     width:"40%",
//     gap:4
//   },
//   icon: {
//     // marginRight: 12,
//   },
//   textInput: {
//     // width: "70%",
//     fontSize: 16,
//     color: "#000",
//   },
// });

import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function IconInput({ textInputConfig, icon }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} {...textInputConfig} />
      <Icon name="calendar-outline" size={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "#fff",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  textInput: {
    fontSize: 16,
    color: "#000",
    paddingVertical: 10,
  },
});
