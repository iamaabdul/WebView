import React from "react";
import { View, StyleSheet, ActivityIndicator, Text } from "react-native";

const NetworkIndicator = ({ visible }) => {
  if (visible) return null;

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3c0385" />
      <Text style={{ marginTop: 10 }}>No Internet Connection</Text>
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

export default NetworkIndicator;
