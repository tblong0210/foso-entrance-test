import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { View } from "react-native"

export default function DiagramScreen() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ThemedText type="title">Sơ đồ Gantt</ThemedText>
    </ThemedView>
  )
}
