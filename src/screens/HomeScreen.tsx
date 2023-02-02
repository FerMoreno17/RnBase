import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Pressable, StatusBar, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../App';
import {useAppSelector} from '../redux/store';
import Icon from 'react-native-vector-icons/FontAwesome';

function HomeScreen(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {initialTitle} = useAppSelector(state => state.home);

  function handlePress() {
    navigation.navigate('NextPage');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text>{initialTitle}</Text>
      <Pressable onPress={handlePress} style={styles.button}>
        <Icon name="rocket" size={30} color="#fff" style={styles.icon} />
        <Text style={styles.text}>Next Page</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
