import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import InnerOffIcon from './LampIcons/InnerOffIcon';
import InnerOnIcon from './LampIcons/InnerOnIcon';

export default function InnerOff() {

    const InnerSvg = InnerOnIcon;
    
  return (
    <View style={{
      flex: 0,
      flexDirection: 'row',
      width: '50%',
      height: '30%',
      backgroundColor: '#1a1b1c'
    }}>
      <InnerSvg/>
    </View>
  );
}
