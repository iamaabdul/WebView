import React, { useState, useRef } from "react";

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import { WebView } from "react-native-webview";
import Indicator from "./app/activityIndicator";
import NetworkIndicator from "./app/NetworkIndicator";
import { useNetInfo } from "@react-native-community/netinfo";
import { StatusBar } from "expo-status-bar";

import FavIcon from "./app/FavIcon";

const App = () => {
  const [loading, setloading] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const netInfo = useNetInfo();
  const webViewRef = useRef();

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
    >
      <NetworkIndicator visible={netInfo.isConnected} />
      <Indicator visible={loading} />

      <ScrollView contentContainerStyle={{ flex: 1 }} bounces={false}>
        <FavIcon onPress={() => webViewRef.current.reload()} />
        <WebView
          source={{ uri: "https://ict-trainings.com/ictapp/app/" }}
          javaScriptEnabled={true}
          ref={(ref) => (webViewRef.current = ref)}
          allowsBackForwardNavigationGestures={true}
          onLoadStart={() => setloading(true)}
          onLoadEnd={() => setloading(false)}
          setDisplayZoomControls={false}
          setBuiltInZoomControls={false}
          contentInsetAdjustmentBehavior="automatic"
        />
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
