import { View, Text, StyleSheet, } from 'react-native'
import React from 'react'
// import Slider from '../../../components/slider/Slider'
import Slider from '../../../components/Slider'


const Onboarding = () => {
  return (
    <View style={styles.container}>
      <Slider/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#00ffff'
  },
  // greeting: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   margin: 16,
  // },
});

export default Onboarding;