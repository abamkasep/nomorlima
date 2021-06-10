import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import PasienScreen from './PasienScreen';
import RiwayatScreen from './RiwayatScreen';

const TabStack = () => (
  <Tab.Navigator
    initialRouteName="Pasien"
    barStyle={{
      backgroundColor: '#ffffff',
    }}
    tabBarOptions={{
      showLabel: false,
      style: {
        position: 'absolute',
        height: 80,
      },
    }}>
    <Tab.Screen
      name="Pasien"
      component={PasienScreen}
      options={{
        headerTitle: false,
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={
                focused
                  ? require('../assets/home-active.png')
                  : require('../assets/home.png')
              }
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Riwayat"
      component={RiwayatScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={
                focused
                  ? require('../assets/order-active.png')
                  : require('../assets/order.png')
              }
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
        ),
      }}
    />
  </Tab.Navigator>
);
