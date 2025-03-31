import { useEffect, useState } from "react"
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native"
import { Checkbox } from "react-native-paper"

import { IProduceStatus } from "@/mock-data/produce-data"

import TagProperty from "../atoms/TagProperty"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"

type Props = {
  listItem: IProduceStatus[]
}

export default function DropdownCustom({ listItem }: Props) {
  const [expanded, setExpanded] = useState(false)
  const [animation] = useState(new Animated.Value(0))
  const [spinValue] = useState(new Animated.Value(0))

  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const toggleDropdown = () => {
    const toValue = expanded ? 0 : 1
    Animated.timing(animation, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start()
    setExpanded(!expanded)
  }

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 180],
  })

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "0deg"],
  })

  const handleSelectItem = (item: IProduceStatus) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== item.id))
    } else {
      setSelectedItems([...selectedItems, item.id])
    }
  }

  const isSelected = (item: IProduceStatus) => {
    return selectedItems.includes(item.id)
  }

  const CheckBoxItemDropdown = ({
    item,
  }: {
    item: IProduceStatus
  }): JSX.Element => {
    return (
      item && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => handleSelectItem(item)}
        >
          <ThemedView style={styles.itemDropdown}>
            <Checkbox
              status={isSelected(item) ? "checked" : "unchecked"}
              color="#1760B9"
            />
            <TagProperty
              textVal={item.name || ""}
              textColor={item.color || "#000"}
              backgroundColor={item.bgColor || "#fff"}
              size={"large"}
            />
          </ThemedView>
        </TouchableOpacity>
      )
    )
  }

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: expanded ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [expanded])

  return (
    <ThemedView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => toggleDropdown()}>
        <ThemedView
          style={[
            styles.btnExpand,
            {
              borderBottomEndRadius: expanded ? 0 : 8,
              borderBottomStartRadius: expanded ? 0 : 8,
              borderBottomWidth: expanded ? 0 : 1,
            },
          ]}
        >
          <ThemedView style={styles.btnLeftSide}>
            <Image
              source={require("@/assets/icons/chartdonut-icon.png")}
              style={{
                width: 16,
                height: 16,
                tintColor: "#9295A4",
              }}
            />
            <ThemedText style={styles.btnText}>Trạng thái</ThemedText>
          </ThemedView>
          <ThemedView style={{ backgroundColor: "#fff" }}>
            <Animated.Image
              source={require("@/assets/icons/caretup-icon.png")}
              style={{
                width: 12,
                height: 12,
                tintColor: "#9295A4",
                transform: [{ rotate: spin }],
              }}
            />
          </ThemedView>
        </ThemedView>
      </TouchableWithoutFeedback>
      <Animated.View style={[{ height: heightInterpolate }]}>
        {expanded && (
          <ScrollView style={styles.dropdownContainer}>
            {listItem.map((item) => (
              <ThemedView
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#F7F8F9",
                  paddingVertical: 8,
                  backgroundColor: "#fff",
                }}
                key={item.id}
              >
                <CheckBoxItemDropdown item={item} />
              </ThemedView>
            ))}
          </ScrollView>
        )}
      </Animated.View>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  btnExpand: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  btnText: {
    fontSize: 14,
    fontWeight: 400,
    color: "#3A3E4C",
    marginLeft: 10,
  },
  btnLeftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btnRightSide: {},
  dropdownContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
  },
  itemDropdown: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#fff",
  },
})
