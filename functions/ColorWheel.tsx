import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';

const ColorWheel = () => {
  const [color, setColor] = useState('');

  const onColorChange = color => {
    setColor(color);
  };
  
  return (
    
        <ColorPicker
          color={color}
          onColorChange={(color) => onColorChange(color)}
          onColorChangeComplete={color => (`Color selected: ${color}`)}
          thumbSize={30}
          sliderSize={30}
          gapSize={25}
          sliderHidden={true}
          noSnap={true}
          row={false}
        />
     
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 4,
  },
});
export default ColorWheel;