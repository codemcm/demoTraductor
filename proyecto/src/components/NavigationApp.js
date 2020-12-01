import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';

import Login from './login/Login';
import AnimalesListar from './animales/animalesListar';
import AnimalDetalle from './animales/animalDetalle';
import CuerpoListar from "./cuerpo/cuerpoListar";
import CuerpoDetalle from "./cuerpo/cuerpoDetalle";
import SaludosListar from "./saludos/saludosListar";
import SaludosDetalle from "./saludos/saludosDetalle";
import CosasListar from "./cosas/cosasListar";
import CosasDetalle from "./cosas/cosasDetalle";
import NumeroListar from "./numeros/numeroListar";
import NumeroDetalle from "./numeros/numeroDetalle";
import FamiliaListar from "./familia/familiaListar";
import FamiliaDetalle from "./familia/familiaDetalle";
import ColoresListar from "./colores/coloresListar";
import ColoresDetalle from "./colores/coloresDetalle";
import FrutaListar from "./frutas/frutaListar";
import FrutaDetalle from "./frutas/frutaDetalle";
import VerdurasListar from "./verduras/verdurasListar";
import VerduraDetalle from "./verduras/verduraDetalle";
import Menu from './menu/Menu';
import LotPlay from './Lot/LotPlay';
function DummyView() {
  return (
    <View>
      <Text>Desarrollado</Text>
      <Text></Text>
      <Text>Licencia de codigo abierto</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Salir') {
            return <IconAnt name="logout" size={24} color="#1C416C" />;
          } else if (route.name === 'Menu') {
            return <Icon5 name="list" size={25} color="#1C416C" />;
          } else if (route.name === 'Acerca de') {
            return <IconAnt name="setting" size={25} color="#1C416C" />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1C416C',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Acerca de" component={DummyView} />
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
          name="My app"
          component={HomeTabs}
          options={{
            title: 'Aprendamos lenguas con Yeli',
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
        <Stack.Screen
          name="Animales"
          options={{
            title: 'Lista de animales',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={AnimalesListar}
        />
        <Stack.Screen
          name="AnimalDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={AnimalDetalle}
        />
        <Stack.Screen
          name="ListaCuerpo"
          options={{
            title: 'Lista de las partes del cuerpo',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={CuerpoListar}
        />
        <Stack.Screen
          name="CuerpoDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={CuerpoDetalle}
        />
        <Stack.Screen
          name="SaludosListar"
          options={{
            title: 'Lista de saludos',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={SaludosListar}
        />
        <Stack.Screen
          name="SaludosDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={SaludosDetalle}
        />
        <Stack.Screen
          name="CosasListar"
          options={{
            title: 'Lista de cosas',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={CosasListar}
        />
        <Stack.Screen
          name="CosasDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={CosasDetalle}
        />
        <Stack.Screen
          name="NumeroListar"
          options={{
            title: 'Lista de números',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={NumeroListar}
        />
        <Stack.Screen
          name="NumeroDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={NumeroDetalle}
        />

        <Stack.Screen
          name="FamiliaListar"
          options={{
            title: 'Lista de familiares',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={FamiliaListar}
        />
        <Stack.Screen
          name="FamiliaDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={FamiliaDetalle}
        />
        <Stack.Screen
          name="ColoresListar"
          options={{
            title: 'Lista de colores',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ColoresListar}
        />
        <Stack.Screen
          name="ColoresDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={ColoresDetalle}
        />
        <Stack.Screen
          name="FrutaListar"
          options={{
            title: 'Listas de frutas',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={FrutaListar}
        />
        <Stack.Screen
          name="FrutaDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={FrutaDetalle}
        />

        <Stack.Screen
          name="VerdurasListar"
          options={{
            title: 'Lista de verduras',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={VerdurasListar}
        />
        <Stack.Screen
          name="VerduraDetalle"
          options={{
            title: 'Traducciones',
            headerStyle: {
              backgroundColor: '#1C416C',
            },
            headerTintColor: '#fff',
          }}
          component={VerduraDetalle}
        />
        <Stack.Screen name="LotPlay" component={LotPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
