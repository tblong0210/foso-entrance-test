import { StyleSheet } from "react-native"
import { ThemedView } from "../ThemedView"
import { PropsWithChildren } from "react"
import { ThemedText } from "../ThemedText"

type Props = {
  textVal: string
  textColor: string
  backgroundColor: string
  size?: "large" | "default"
}

export default function TagProperty({
  textVal,
  textColor,
  backgroundColor,
  size = "default",
}: Props) {
  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedText style={[styles[size], { color: textColor }]}>
        {textVal}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  large: {
    fontSize: 14,
    fontWeight: 400,
  },
  default: {
    fontSize: 12,
    fontWeight: 400,
  },
})
