import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

const NextPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#359DE0'} />
      <Text>NextPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default NextPage;
