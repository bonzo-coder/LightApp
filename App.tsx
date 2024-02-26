import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CrownOff from './Lamp/Crown';
import InnerOff from './Lamp/Inner';
import MainOff from './Lamp/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>BLABL</Text>
      <View>
        <CrownOff/>
      </View>
      <View>
        <InnerOff/>
      </View>
      <View>
        <MainOff/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    backgroundColor: '#1a1b1c'
  },
  topText: {
    marginTop: 0,
    backgroundColor: '#1a1b1c',
    color: 'white'
  },
});
