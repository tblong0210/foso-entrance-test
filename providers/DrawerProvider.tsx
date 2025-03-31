import React, { createContext, useContext, useRef } from "react"
import { DrawerLayoutAndroid } from "react-native"

type DrawerContextType = {
  drawer: React.RefObject<DrawerLayoutAndroid>
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const drawer = useRef<DrawerLayoutAndroid>(null)

  return (
    <DrawerContext.Provider value={{ drawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => {
  const context = useContext(DrawerContext)
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider")
  }
  return context
}
