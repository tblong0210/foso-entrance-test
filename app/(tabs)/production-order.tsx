import { Image, StyleSheet, TouchableHighlight } from "react-native"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { useDrawer } from "@/providers/DrawerProvider"

export default function ProductionOrderScreen() {
  const { drawer } = useDrawer()

  return (
    <ThemedView style={styles.container}>
      <ThemedView>
        <Image
          source={require("@/assets/images/production-img.png")}
          style={styles.imageProduction}
        />
      </ThemedView>
      <ThemedView>
        <ThemedText style={styles.textLg} type="title">
          Chưa có Lệnh sản xuất.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <TouchableHighlight
          style={{ borderRadius: 9 }}
          onPress={() => drawer.current?.openDrawer()}
        >
          <ThemedView style={[styles.btnPrimary]}>
            <Image
              source={require("@/assets/icons/PushPinSimple-icon.png")}
              style={styles.btnIcon}
            />
            <ThemedText style={styles.btnText}>
              Bắt đầu ghim lệnh ngay
            </ThemedText>
          </ThemedView>
        </TouchableHighlight>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  imageProduction: {
    width: 250,
    height: 250,
  },
  textLg: {
    fontSize: 18,
    fontWeight: 400,
    color: "#11315B",
  },
  btnPrimary: {
    backgroundColor: "#0375F3",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
  },
  btnIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
})
