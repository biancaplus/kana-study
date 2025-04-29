import { useFonts } from "expo-font";
import { SplashScreen, Tabs } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    YujiSyuku: require("../assets/fonts/YujiSyuku-Regular.ttf"),
    OpenSans: require("../assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (error) {
      console.error("Font loading error:", error);
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  const tabs = [
    {
      name: "index", //"Seion",
      title: "清音",
      icon: require("../assets/images/hiragana_inactive.png"),
      activeIcon: require("../assets/images/hiragana_active.png"),
    },
    {
      name: "Dakuon",
      title: "濁音",
      icon: require("../assets/images/katakana_inactive.png"),
      activeIcon: require("../assets/images/katakana_active.png"),
    },
    {
      name: "Yoon",
      title: "拗音",
      icon: require("../assets/images/language_inactive.png"),
      activeIcon: require("../assets/images/language_active.png"),
    },
    {
      name: "Practice",
      title: "練習",
      icon: require("../assets/images/checkbox_inactive.png"),
      activeIcon: require("../assets/images/checkbox_active.png"),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#3B97D3",
          tabBarInactiveTintColor: "#333",
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={focused ? tab.activeIcon : tab.icon}
                  style={styles.tabIcon}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain", // 保持比例
  },
});
