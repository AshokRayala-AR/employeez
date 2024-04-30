// import React from "react";
// import { View, FlatList, Text, StyleSheet } from "react-native";
// import IconInput from "./IconInput";
// import { PersonalDetailsData } from "./PersonalDetailsData";
// import Header from "../header/Header";
// import StyledNextButton from "../../ui/nextbutton/StyledNextButton";
// import Next from "../../ui/nextbutton/Next";

// export default function PersonalDetails() {
//   function inputHandler() {}

//   return (
//     <View style={styles.container}>
//       <Header />
//       <View>
//         <Text style={styles.title}>Add your personal details</Text>
//       </View>
//       <View>
//         <FlatList
//           data={PersonalDetailsData}
//           renderItem={({ item }) => (
//             <IconInput
//               textInputConfig={{
//                 keyboardType: "default",
//                 onChangeText: inputHandler,
//                 placeholder: item.placeholder,
//               }}
//               icon={item.icon}
//             />
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//       <View>
//         <Next btnName="Next" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: "100%",
//     backgroundColor: "#000",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "500",
//     color: "#fff",
//   },
// });

import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import IconInput from "./IconInput";
import { PersonalDetailsData } from "./PersonalDetailsData";
import Header from "../header/Header";
import Next from "../../ui/nextbutton/Next";

export default function PersonalDetails() {
  function inputHandler() {}

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Add your personal details</Text>
        <FlatList
          data={PersonalDetailsData}
          renderItem={({ item }) => (
            // <IconInput
            //   textInputConfig={{
            //     keyboardType: "default",
            //     onChangeText: inputHandler,
            //     placeholder: item.placeholder,
            //   }}
            //   icon={item.icon}
            //   iicon = {item.iicon}
            //   uploadicon = {item.uploadicon}
            // />
            <Text>Hello</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Next btnName="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
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
