import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
} from "react-native-svg"
import BoxSize from "./BoxSize"

const InnerOnIcon = () => (
  <Svg
  viewBox = {BoxSize()}
    >
      <Defs>
        <LinearGradient
          id="gradient-0"
          x1="220.463"
          x2="220.463"
          y1="65.824"
          y2="131.001"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#B000FF"></Stop>
          <Stop offset="0.498" stopColor="#FF3D00"></Stop>
          <Stop offset="1" stopColor="#FF8B00"></Stop>
          <Stop offset="1" stopColor="rgb(48.42% 48.42% 48.42%)"></Stop>
        </LinearGradient>
      </Defs>
      <Path
        fill="#D8D8D8"
        stroke="#000"
        d="M176.251 60.339H262.572V87.366H176.251z"
      ></Path>
      <Path
        fill="url(#gradient-0)"
        stroke="#000"
        d="M220.463 65.824l52.865 65.177h-105.73l52.865-65.177z"
      ></Path>
      <Ellipse
        cx="220.683"
        cy="124.616"
        fill="#D8D8D8"
        stroke="#000"
        rx="18.852"
        ry="12.043"
      ></Ellipse>
  </Svg>
)
export default InnerOnIcon
