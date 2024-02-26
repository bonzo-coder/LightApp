import * as React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import CrownOffIcon from './LampIcons/CrownOffIcon';
import CrownOnIcon from './LampIcons/CrownOnIcon';

export default function CrownOff() {

    const CrownSvg = CrownOnIcon;
    
  return (
    <View style={{
      flex: 0,
      flexDirection: 'row',
      width: '50%',
      height: '30%',
      backgroundColor: '#1a1b1c'
    }}>
      <CrownSvg />
      <Button
        onPress={() => {
        console.log('You tapped the button!');
      }}
  title="Change Mode"
/>
    </View>
  );
}


