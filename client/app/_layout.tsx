// client/app/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { height: 68, paddingBottom: 8 },
        tabBarIcon: ({ color, size }) => {
          let name: any = "home-outline";
          if (route.name.endsWith("advisory")) name = "chatbubble-ellipses-outline";
          if (route.name.endsWith("pest")) name = "bug-outline";
          if (route.name.endsWith("weather")) name = "cloud-outline";
          if (route.name.endsWith("market")) name = "trending-up-outline";
          return <Ionicons name={name} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#0B6E4F",
        tabBarInactiveTintColor: "#777",
      })}
    >
      <Tabs.Screen name="(tabs)/index" options={{ href: "/", title: "Home" }} />
      <Tabs.Screen name="(tabs)/advisory" options={{ title: "Advisory" }} />
      <Tabs.Screen name="(tabs)/pest" options={{ title: "Pest" }} />
      <Tabs.Screen name="(tabs)/weather" options={{ title: "Weather" }} />
      <Tabs.Screen name="(tabs)/market" options={{ title: "Market" }} />
    </Tabs>
  );
}
