import * as React from "react"
import Svg, { Path, Ellipse } from "react-native-svg"
import BoxSize from "./BoxSize"

const InnerOffIcon = () => (
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
    fill="#b8b8b8"
    stroke="#b8b8b8"
    d="M167.176 103.152l-6.49-1.032-14.279-2.269"
  ></Path>
  <Path
    fill="#b8b8b8"
    stroke="#b8b8b8"
    d="M167.793 111.926l-21.016-.168M168.151 119.478l-21.363 4.153M291.833 98.517L270.47 102.67M291.501 109.333l-21.016-.168M291.833 119.625l-20.769-3.301"
  ></Path>
  </Svg>
)
export default InnerOffIcon
