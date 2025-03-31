import { LinearGradient } from "expo-linear-gradient"
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native"

import { IProduceCode, IProduceStatus } from "@/mock-data/produce-data"

import ProgressBarCustom from "../atoms/ProgressBarCustom"
import TagProperty from "../atoms/TagProperty"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import Tooltip from "react-native-walkthrough-tooltip"
import { useEffect, useState } from "react"

type Props = {
  isPin: boolean
  item: IProduceCode
  status: IProduceStatus
  handlePinProduce: (item: IProduceCode) => void
}

type TooltipInfoProps = {
  color: string
  text: string
  ratio?: number
}

const tooltipInfoData: TooltipInfoProps[] = [
  {
    color: "#FF8F0D",
    text: "Tiến độ Kế hoạch Nguyên liệu",
  },
  {
    color: "#0375F3",
    text: "Tiến độ Nhập kho Thành phẩm",
  },
]

export default function ProductionCard({
  isPin,
  item,
  status,
  handlePinProduce,
}: Props) {
  const [isOpenTooltip, setIsOpenTooltip] = useState(false)
  const [tooltipInfo, setTooltipInfo] =
    useState<TooltipInfoProps[]>(tooltipInfoData)

  useEffect(() => {
    const updatedTooltipInfo = tooltipInfo.map((info) => {
      if (info.text === "Tiến độ Kế hoạch Nguyên liệu") {
        return { ...info, ratio: item.progressInStock }
      } else if (info.text === "Tiến độ Nhập kho Thành phẩm") {
        return { ...info, ratio: item.progressInProcess }
      }
      return info
    })
    setTooltipInfo(updatedTooltipInfo)
  }, [item])

  const TooltipInfo = ({ color, text, ratio }: TooltipInfoProps) => {
    return (
      <ThemedView style={styles.tooltipContentContainer}>
        <ThemedView
          style={[styles.tooltipCircle, { backgroundColor: color }]}
        />
        <ThemedText
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "#3A3E4C",
          }}
        >
          {text}
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "#667085",
          }}
        >
          {ratio}%
        </ThemedText>
      </ThemedView>
    )
  }

  return (
    <LinearGradient
      colors={["rgba(226, 240, 254, 0)", "rgba(199, 223, 251, 0.5)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 8 }}
    >
      <ThemedView style={styles.container}>
        <ThemedView style={styles.rectangleStyle} />
        <ThemedView style={{ width: "95%", backgroundColor: "transparent" }}>
          <ThemedView style={styles.cardHeader}>
            <TagProperty
              textVal={status.name || ""}
              textColor={status.color || "#000"}
              backgroundColor={status.bgColor || "#fff"}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => handlePinProduce(item)}
            >
              <Image
                source={require("@/assets/icons/PushPin-icon.png")}
                style={[
                  styles.cardImageHeader,
                  { tintColor: isPin ? "red" : "#9295A4" },
                ]}
              />
            </TouchableOpacity>
          </ThemedView>
          <ThemedText style={styles.textCode}>{item.code}</ThemedText>
          <ThemedText style={styles.deadlineText}>
            Deadline: {item.deadline}
          </ThemedText>
          <ThemedView style={styles.progressContainer}>
            <ThemedView style={{ width: "42%" }}>
              <ProgressBarCustom
                color="#FF9432"
                backgroundColor="rgba(255, 129, 26, 0.15)"
                progress={item.progressInStock}
              />
            </ThemedView>
            <ThemedView style={{ width: "42%" }}>
              <ProgressBarCustom
                color="#0375F3"
                backgroundColor="rgba(7, 106, 148, 0.15)"
                progress={item.progressInProcess}
              />
            </ThemedView>
            <ThemedView>
              <Tooltip
                isVisible={isOpenTooltip}
                placement="left"
                contentStyle={{ width: "100%" }}
                content={
                  <>
                    {tooltipInfo.map((value, index) => (
                      <TooltipInfo
                        key={index}
                        color={value.color}
                        text={value.text}
                        ratio={(value.ratio || 0) * 100}
                      />
                    ))}
                  </>
                }
                onClose={() => setIsOpenTooltip(false)}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setIsOpenTooltip(true)}
                >
                  <Image
                    source={require("@/assets/icons/Info-icon.png")}
                    style={styles.infoIcon}
                  />
                </TouchableOpacity>
              </Tooltip>
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "transparent",
  },
  rectangleStyle: {
    width: 4,
    height: "100%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: "#0375F3",
    marginRight: 8,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  cardImageHeader: {
    width: 20,
    height: 20,
  },
  textCode: {
    fontSize: 14,
    fontWeight: 600,
    color: "#003DA0",
    marginBottom: 5,
  },
  deadlineText: {
    fontSize: 12,
    fontWeight: 500,
    color: "#667085",
    marginBottom: 5,
  },
  progressContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
  },
  infoIcon: {
    width: 12,
    height: 12,
    tintColor: "#667085",
  },
  tooltipContentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
  },
  tooltipCircle: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: "#FF8F0D",
  },
})
