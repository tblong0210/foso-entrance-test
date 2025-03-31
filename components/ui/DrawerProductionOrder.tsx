import { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet } from "react-native"

import {
  IProduceCode,
  IProduceStatus,
  listProduceCodeData,
  produceStatusesData,
} from "@/mock-data/produce-data"

import ButtonCustom from "../atoms/ButtonOpacityCustom"
import InputSearch from "../atoms/InputSearch"
import DropdownCustom from "../molecules/DropdownCustom"
import ProductionCard from "../molecules/ProductionCard"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"

export default function DrawerProductionOrder() {
  const [listProduceStatuses, setListProduceStatuses] =
    useState<IProduceStatus[]>()
  const [listProduceCode, setListProduceCode] = useState<IProduceCode[]>([])
  const [listProduceCodePin, setListProduceCodePin] = useState<number[]>([])

  const getStatusById = (id: number): IProduceStatus => {
    const status = listProduceStatuses?.find((item) => item.id === id)
    return status || { id: 0, name: "", color: "", bgColor: "" }
  }

  const handlePinProduceCode = (item: IProduceCode) => {
    if (listProduceCodePin.includes(item.id)) {
      setListProduceCodePin(listProduceCodePin.filter((id) => id !== item.id))
    } else {
      setListProduceCodePin([...listProduceCodePin, item.id])
    }
  }

  const isPinProduceCode = (item: IProduceCode) => {
    return listProduceCodePin.includes(item.id)
  }

  useEffect(() => {
    setListProduceStatuses(produceStatusesData)
    setListProduceCode(listProduceCodeData)
  }, [])

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={{ marginBottom: 10, marginTop: 30 }}>
        <ThemedText style={[styles.textHeader, { backgroundColor: "white" }]}>
          Lệnh Sản Xuất
        </ThemedText>
      </ThemedView>
      <ThemedView style={{ marginBottom: 10, backgroundColor: "white" }}>
        <InputSearch />
      </ThemedView>
      <ThemedView style={{ marginBottom: 10, backgroundColor: "white" }}>
        <DropdownCustom listItem={listProduceStatuses || []} />
      </ThemedView>
      <ThemedView style={{ marginBottom: 10, backgroundColor: "white" }}>
        <ButtonCustom
          style={styles.btnRemovePin}
          activeOpacity={0.6}
          textStyle={styles.btnTextRemovePin}
          textVal={"Bỏ ghim toàn bộ"}
          suffixElement={
            <Image
              source={require("@/assets/icons/PushPinSimpleSlash-icon.png")}
              style={styles.btnIconRemovePin}
            />
          }
        />
      </ThemedView>
      <ScrollView>
        {listProduceCode?.map((item: IProduceCode) => (
          <ThemedView
            key={item.id}
            style={{
              paddingVertical: 10,
              borderBottomWidth: 1,
              borderColor: "#D0D5DD",
              backgroundColor: "#fff",
            }}
          >
            <ProductionCard
              isPin={isPinProduceCode(item)}
              item={item}
              status={getStatusById(item.statusId)}
              handlePinProduce={handlePinProduceCode}
            />
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 500,
  },
  btnRemovePin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    backgroundColor: "#fff",
  },
  btnTextRemovePin: {
    fontSize: 14,
    fontWeight: 500,
    color: "#11315B",
  },
  btnIconRemovePin: {
    width: 16,
    height: 16,
    tintColor: "#11315B",
  },
})
