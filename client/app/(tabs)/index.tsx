// client/app/(tabs)/index.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BigButton from "../../components/BigButton";
import Card from "../../components/Card";
// import LottieView from "lottie-react-native"; // temporarily disabled

export default function Home() {
  return (
    <ScrollView style={s.root} contentContainerStyle={{ padding: 16 }}>
      <View style={s.header}>
        {/* <Image source={require("../../assets/logo.png")} style={s.logo} /> */}
        <View>
          <Text style={s.hi}>Namaste, Kisan</Text>
          <Text style={s.sub}>Real-time crop advice & pest detection</Text>
        </View>
      </View>

      {/* ✅ Safe placeholder instead of farm.json animation */}
      <View style={s.placeholder}>
        <Text style={{ color: "#666" }}>🌾 Farm Animation Placeholder</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Card>
          <Text style={s.cardTitle}>Quick Actions</Text>
          <View style={s.actions}>
            <BigButton title="Ask Advisor" icon="chatbubble-ellipses" href="/(tabs)/advisory" />
            <BigButton title="Detect Pest" icon="bug" href="/(tabs)/pest" />
            <BigButton title="Weather" icon="cloud" href="/(tabs)/weather" />
            <BigButton title="Market" icon="trending-up" href="/(tabs)/market" />
          </View>
        </Card>
      </View>

      <Card>
        <Text style={s.cardTitle}>Today's Tip</Text>
        <Text>Use light irrigation after sunrise to reduce fungal infections.</Text>
      </Card>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#FCFFFB" },
  header: { flexDirection: "row", gap: 12, alignItems: "center", marginBottom: 8 },
  logo: { width: 64, height: 64, borderRadius: 12 },
  hi: { fontSize: 18, fontWeight: "700" },
  sub: { color: "#777" },
  cardTitle: { fontWeight: "700", marginBottom: 6 },
  actions: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  placeholder: {
    height: 140,
    backgroundColor: "#eee",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
});
