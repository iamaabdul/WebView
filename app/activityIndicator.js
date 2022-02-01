import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Indicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3c0385" animating={visible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default Indicator;
