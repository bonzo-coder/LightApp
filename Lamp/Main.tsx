import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MainOffIcon from './LampIcons/MainOffIcon';
import MainOnIcon from './LampIcons/MainOnIcon';

export default function MainOff() {

    const MainSvg = MainOnIcon;
    
  return (
    <View style={{
      flex: 0,
      flexDirection: 'row',
      width: '50%',
      height: '30%',
      backgroundColor: '#1a1b1c'
    }}>
      <MainSvg/>
    </View>
  );
}
