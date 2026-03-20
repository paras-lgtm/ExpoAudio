import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <Stack.Screen name="index" options={{ title: "index" }} />
      <Stack.Screen name="welcomeScreen" options={{ title: "welcomeScreen" }} />
    </Stack>
  );
}
