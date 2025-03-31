import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { ThemedView } from "../ThemedView"

export default function InputSearch() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          placeholder="Tìm kiếm mã lệnh sản xuất"
          clearButtonMode="always"
          placeholderTextColor="#9295A4"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputSearch}
          onChangeText={(text) => console.log(text)}
        />
        <TouchableOpacity
          style={styles.btnSearch}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <ThemedView>
            <ThemedView>
              <Image
                source={require("@/assets/icons/search-icon.png")}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "#11315B",
                  backgroundColor: "#92BFF7",
                }}
              />
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  inputContainer: {
    position: "relative",
  },
  inputSearch: {
    height: 40,
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 60,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
  btnSearch: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: "#92BFF7",
    borderWidth: 1,
    borderColor: "#D0D5DD",
  },
})
