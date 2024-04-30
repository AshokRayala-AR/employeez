import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function EnterDetailText({ title, subtitle }) {
  return (
    <View>
      <Text style={styles.textstylesa}>{title}</Text>
      <Text style={styles.textstylesb}>{subtitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textstylesa: {
    fontSize: 28,
    fontWeight: "700",
    color: "white",
    marginBottom: 24,
  },
  textstylesb: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
});
