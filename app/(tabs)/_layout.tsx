import { LinearGradient } from "expo-linear-gradient"
import { Tabs } from "expo-router"
import React from "react"
import {
  DrawerLayoutAndroid,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native"

import { HapticTab } from "@/components/HapticTab"
import DrawerProductionOrder from "@/components/ui/DrawerProductionOrder"
import TabBarBackground from "@/components/ui/TabBarBackground"
import { Colors } from "@/constants/Colors"
import { useColorScheme } from "@/hooks/useColorScheme"
import { useDrawer } from "@/providers/DrawerProvider"

export default function TabLayout() {
  const colorScheme = useColorScheme()
  const { drawer } = useDrawer()

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={() => <DrawerProductionOrder />}
    >
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Tổng quan",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("@/assets/icons/overview-icon.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: "Đơn hàng",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("@/assets/icons/order-icon.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="diagram"
          options={{
            title: "Sơ đồ Gantt",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("@/assets/icons/diagram-icon.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="production-order"
          options={{
            title: "Lệnh SX",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("@/assets/icons/produce-icon.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: color,
                }}
              />
            ),
            headerShown: true,
            headerTitle: "Lệnh Sản Xuất",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#fff" },
            headerLeft: () => (
              <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                <Image
                  source={require("@/assets/icons/menu-icon.png")}
                  style={{
                    width: 40,
                    height: 40,
                    marginLeft: 16,
                  }}
                />
              </TouchableOpacity>
            ),
            headerBackground: () => (
              <LinearGradient
                colors={["#0375F3", "#0B69D2"]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="view-more"
          options={{
            title: "Xem thêm",
            tabBarIcon: ({ color }) => (
              <Image
                source={require("@/assets/icons/more-icon.png")}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: color,
                }}
              />
            ),
          }}
        />
      </Tabs>
    </DrawerLayoutAndroid>
  )
}
