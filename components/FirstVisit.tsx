import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

interface Props{
    onCapturePress?():void;
    onSelectPress?():void;
}

const FirstVisit = ({onCapturePress,onSelectPress}:Props) => {
 
   return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image
          style={styles.heroImage}
          source={require('../assets/hero.png')}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Start Editing your First Image</Text>
        <Text style={styles.subTitle}>  
          Pick an Image from your gallery or capture a new one to begin!
        </Text>
      </View> 
      <View style={styles.buttonContainer}>
        <Pressable onPress={onCapturePress} style={styles.button}>
            <Entypo name="camera" color="#fff" size={20} />
            <Text style={styles.buttonTitle}>Capture</Text>
        </Pressable>
        <Pressable onPress={onSelectPress} style={styles.button}>
            <Entypo name="image" color="#fff" size={20} />
            <Text style={styles.buttonTitle}>Select</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default FirstVisit

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },

  heroImage: {
    width: 260,
    height: 360,
    borderRadius: 20,
  },

  bottomContainer: {
    width: '100%',
    marginTop: 25,
  },

  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },

  subTitle: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    gap: 15,
  },

  button: {
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#40423F',
    borderRadius: 10,
    gap: 8,
  },

  buttonTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
});