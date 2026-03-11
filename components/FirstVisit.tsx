import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FirstVisit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.heroImage} source={require('../assets/hero.png')}/>
      </View>
      <View style={styles.bottomContainer}></View>
    </View>
  )
}

export default FirstVisit

const styles = StyleSheet.create({
    container:{},
    imageContainer:{},
    heroImage:{
        margin:'auto'
    },
    bottomContainer:{}
})