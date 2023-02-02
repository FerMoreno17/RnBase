import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPageScreen';
import 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export type RootStackParamList = {
  Home: undefined;
  NextPage: undefined;
};

declare global {
  namespace ReactNavigation {
    type RootParamLists = RootStackParamList;
  }
}

export default function App() {
  const options: DrawerNavigationOptions = {
    headerTitleAlign: 'center',
    headerTitleStyle: {fontWeight: 'bold'},
    headerStyle: {backgroundColor: '#359DE0'},
    headerTintColor: 'white',
    title: 'AppName',
  };

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator screenOptions={options}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Drawer.Screen
            name="NextPage"
            component={NextPage}
            options={{title: 'Next Page'}}
          />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
