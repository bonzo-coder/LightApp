import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
} from "react-native-svg"
import BoxSize from "./BoxSize"

const MainOnIcon = () => (
  <Svg
  viewBox = {BoxSize()}
  >
    <Defs>
      <LinearGradient
        id="gradient-0"
        x1="220.683"
        x2="220.683"
        y1="112.573"
        y2="136.659"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor="#E6FF0E"></Stop>
        <Stop offset="100%" stopColor="#FFF"></Stop>
      </LinearGradient>
    </Defs>
    <Path
      fill="#D8D8D8"
      stroke="#000"
      d="M176.251 60.339H262.572V87.366H176.251z"
    ></Path>
    <Path
      fill="#D8D8D8"
      stroke="#000"
      d="M220.463 65.824l52.865 65.177h-105.73l52.865-65.177z"
    ></Path>
    <Ellipse
      cx="220.683"
      cy="124.616"
      fill="url(#gradient-0)"
      stroke="#000"
      rx="18.852"
      ry="12.043"
    ></Ellipse>
  </Svg>
)
export default MainOnIcon
