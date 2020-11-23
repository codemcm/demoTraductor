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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
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
            title: 'Lista Cuerpo',
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
            title: 'Cuerpo',
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
            title: 'SaludosListar',
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
            title: 'SaludosDetalle',
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
            title: 'CosasListar',
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
            title: 'CosasDetalle',
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
            title: 'NumeroListar',
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
            title: 'NumeroDetalle',
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
            title: 'FamiliaListar',
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
            title: 'FamiliaDetalle',
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
            title: 'ColoresListar',
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
            title: 'ColoresDetalle',
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
            title: 'FrutaListar',
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
            title: 'FrutaDetalle',
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
            title: 'VerdurasListar',
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
            title: 'VerduraDetalle',
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
