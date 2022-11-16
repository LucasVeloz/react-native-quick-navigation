import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '../../react-native-quick-navigation/shared';


export const FirstScreen = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.navigate('SecondScreen');
  }

  return (
    <View style={styles.container}>
      <Button onPress={navigate} title="First Screen" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0066',
    alignItems: 'center',
    justifyContent: 'center',
  },
})