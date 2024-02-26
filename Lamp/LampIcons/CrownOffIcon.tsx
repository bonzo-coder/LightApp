import React from "react";
import Svg, { Path, Ellipse } from "react-native-svg"
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import BoxSize from "./BoxSize";

function CrownOffIcon() {
  return (
    <View>
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
        d="M167.176 63.152l-20.769-3.301M167.793 71.926l-21.016-.168M168.151 79.478l-21.363 4.153M291.833 58.517L270.47 62.67M291.501 69.333l-21.016-.168M291.833 79.625l-20.769-3.301"
      ></Path>
    </Svg>
    </View>
  );
}

export default CrownOffIcon;    