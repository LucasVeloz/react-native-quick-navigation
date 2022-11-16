import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '../../react-native-quick-navigation/shared';


export const SecondScreen = () => {
  const navigation = useNavigation();

  const navigate = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Button onPress={navigate} title="Second Screen" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
})