import { StyleSheet } from "react-native"
import Animated, { SlideInRight } from "react-native-reanimated"

export const OverlayScreen = ({ component, shouldAnimate }: { component: React.ReactElement, shouldAnimate: boolean }) => {
  return (
    <Animated.View 
      entering={shouldAnimate ? SlideInRight : undefined} 
      style={StyleSheet.absoluteFillObject}
    >
      {component}
    </Animated.View>
  )
}