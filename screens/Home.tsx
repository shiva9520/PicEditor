import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FirstVisit from '../components/FirstVisit';
import { requestImageReadWritePermission } from '../utils/permissions';

const Home = () => {
  const onCapturePress = async () => {
    Alert.alert(
      'Needs your attention',
      'This app must have permission for media.',
      [
        { text: 'Cancel', style: 'cancel', onPress() {} },
        { text: 'Open Settings', style: 'default' },
        { text: 'OK', style: 'destructive' },
      ],
      {
        cancelable: true,
      },
    );
    try {
      if (Platform.OS === 'android') {
        const res = await requestImageReadWritePermission();
        if (res?.never_ask) {
          console.log('Can not ask for Permission');
        } else {
          console.log('everything looks fine : ', res);
        }
      }
    } catch (error) {}
  };
  const onSelectPress = () => {
    Alert.alert('Gooedf');
  };
  return (
    <View style={{ flex:1,paddingTop: 40 }}>
      <FirstVisit
        onCapturePress={onCapturePress}
        onSelectPress={onSelectPress}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
