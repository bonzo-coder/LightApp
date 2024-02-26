import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
import BoxSize from "./BoxSize"

const MainOffIcon = () => (
  <Svg
  viewBox = {BoxSize()}
  >
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
      fill="#D8D8D8"
      stroke="#000"
      rx="18.852"
      ry="12.043"
    ></Ellipse>
    <Path
      fill="#88DA55"
      stroke="#b8b8b8"
      d="M196.285 144.423l-6.49-1.032-14.279-2.269"
    ></Path>
    <Path
      fill="#D8D8D8"
      stroke="#b8b8b8"
      d="M196.902 153.197l-21.016-.168M197.26 160.749l-21.363 4.153M264.546 141.412l-21.363 4.153M264.214 152.228l-21.016-.168M264.546 162.52l-20.769-3.301"
    ></Path>
    
  </Svg>
)
export default MainOffIcon
