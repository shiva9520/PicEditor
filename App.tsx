import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from './screens/Home'

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#181c14'}}>
      <StatusBar barStyle='default' />
      <Home/>
      <Text>App</Text>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})