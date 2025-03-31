import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native"
import { ReactNode } from "react"
import { ThemedText } from "../ThemedText"

type Props = {
  textVal: string
  textStyle?: StyleProp<TextStyle>
  activeOpacity?: number | undefined
  prefixElement?: ReactNode | undefined
  suffixElement?: ReactNode | undefined
} & TouchableOpacityProps

export default function ButtonCustom({
  style,
  textVal,
  textStyle,
  activeOpacity,
  prefixElement,
  suffixElement,
}: Props) {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} style={[style]}>
      {prefixElement}
      <ThemedText style={textStyle}>{textVal}</ThemedText>
      {suffixElement}
    </TouchableOpacity>
  )
}
