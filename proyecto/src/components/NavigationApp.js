import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Login from './login/Login';
import Menu from './menu/Menu';
import ClientAdd from './client/clientAdd';
import ClientList from './client/clientList';
import DrawAdd from './draw/DrawAdd';
import DrawList from './draw/DrawList';
import TicketAdd from './ticket/TicketAdd';
import TicketList from './ticket/TicketList';
import PrizeAdd from './prize/PrizeAdd';
import PrizeList from './prize/PrizeList';
import WinnerList from './winner/WinnerList';
import LotPlay from './Lot/LotPlay';
function DummyView() {
  return (
    <View>
      <Text>Palabra a traducir</Text>
      <Text>traduccion</Text>
      <Text>Imagen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Salir') {
            return <IconAnt name="logout" size={24} color="#1C416C" />;
          } else if (route.name === 'Menu') {
            return <Icon5 name="list" size={25} color="#1C416C" />;
          } else if (route.name === 'Traducir') {
            return <IconAnt name="setting" size={25} color="#1C416C" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1C416C',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Traducir" component={DummyView} />
      <Tab.Screen name="Salir" component={DummyView} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function NavigationApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="PrizeAdd"
          component={PrizeAdd}
          options={{
            title: 'Nuevo premio',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="ClientNew"
          options={{
            title: 'Cliente nuevo',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ClientAdd}
        />
        <Stack.Screen
          name="ClientList"
          options={{
            title: 'Clientes',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ClientList}
        />
        <Stack.Screen
          name="DrawAdd"
          options={{
            title: 'Registrar rifa',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={DrawAdd}
        />
        <Stack.Screen
          name="DrawList"
          options={{
            title: 'Rifas',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={DrawList}
        />

        <Stack.Screen
          name="TicketAdd"
          options={{
            title: 'Boleto nuevo',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={TicketAdd}
        />
        <Stack.Screen
          name="My app"
          component={HomeTabs}
          options={{
            title: 'My app',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: null,
          }}
        />
        <Stack.Screen name="TicketList" component={TicketList} />
        <Stack.Screen
          name="PrizeList"
          options={{
            title: 'Lista de premios',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={PrizeList}
        />
        <Stack.Screen
          name="WinnerList"
          options={{
            title: 'Clientes con suerte',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={WinnerList}
        />
        <Stack.Screen name="LotPlay" component={LotPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
