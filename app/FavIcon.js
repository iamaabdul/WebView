import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Linking } from "react-native";

const FavIcon = ({ onPress }) => {
  const [phoneNumber, setphoneNumber] = useState("03406944269");

  sendWhatsApp = () => {
    let msg = "This is a test message so don't freak out";
    let phoneWithCountryCode = "+923174046968";

    let mobile =
      Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then((data) => {
            console.log("WhatsApp Opened");
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
        <Image source={require("../assets/reload.png")} style={styles.Image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => Linking.openURL(`tel:${phoneNumber}`)}
      >
        <Image source={require("../assets/phone.png")} style={styles.Image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => sendWhatsApp()}
      >
        <Image
          source={require("../assets/whatsapp.png")}
          style={styles.Image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FavIcon;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    right: 10,
    zIndex: 1,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 100,
    marginVertical: 2.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});
