import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Ellipse,
} from "react-native-svg"
import BoxSize from "./BoxSize";

function CrownOnIcon() {
  return (
    <Svg
      viewBox = {BoxSize()}
    >
      <Defs>
        <LinearGradient
          id="gradient1"
          x1="219.412"
          x2="219.412"
          y1="60.339"
          y2="87.366"
          gradientTransform="matrix(.90399 -.42755 .37446 .79173 -1.529 106.377)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#F67A7A"></Stop>
          <Stop offset="100%" stopColor="#FFC100"></Stop>
        </LinearGradient>
      </Defs>
      <Path
        fill="url(#gradient1)"
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
        stroke="#000"
        d="M167.176 63.152l-6.49-1.032-14.279-2.269"
      ></Path>
      <Path
        fill="#D8D8D8"
        stroke="#000"
        d="M167.793 71.926l-21.016-.168M168.151 79.478l-21.363 4.153M291.833 58.517L270.47 62.67M291.501 69.333l-21.016-.168M291.833 79.625l-20.769-3.301"
      ></Path>
    </Svg>
  );
}

export default CrownOnIcon;