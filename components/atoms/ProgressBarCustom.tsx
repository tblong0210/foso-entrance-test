import { StyleSheet } from "react-native"
import { ThemedView } from "../ThemedView"
import { ThemedText } from "../ThemedText"

type Props = {
  progress: number
  color?: string
  backgroundColor?: string
}

export default function ProgressBarCustom({
  progress,
  backgroundColor = "#E0E0E0",
  color = "#4CAF50",
}: Props) {
  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedView
        style={[
          styles.progressBar,
          { backgroundColor: color, width: `${progress * 100}%` },
        ]}
      />
      <ThemedText style={styles.progressText}>{`${Math.round(
        progress * 100
      )}%`}</ThemedText>
    </ThemedView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: 12,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  progressText: {
    fontSize: 8,
    position: "absolute",
    alignSelf: "center",
    left: 10,
    color: "white",
  },
})
