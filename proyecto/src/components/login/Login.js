// @ts-nocheck
import * as React from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import { CheckBox } from 'react-native-elements';
import { useState } from 'react';

import loginStyle from './loginStyle';
export default function Login({ navigation }) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  function handleClick() {
    if (username == '' || password == '') {
      Alert.alert('El nombre y la edad son requeridos');
    } else {
      if (username == 'Yael' || password == '23' && username == 'Luis' || password == '22' ) {
        navigation.navigate('My app')
      }else{
        Alert.alert('Datos incorrectos');
      }
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={loginStyle.triangle} />
      <View style={loginStyle.containerView}>
        <Text
          h4
          style={{
            color: '#3D618A',
            marginLeft: 30,
            marginBottom: 10,
          }}>
          {''}
          Aprendiendo lenguas con Yeli
        </Text>
        <View
          style={{
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            justifyContent: 'center',
          }}>
          <Input
            placeholder="Nombre"
            inputStyle={styles.containerInput}
            value={username}
            onChangeText={text => setusername(text)}
            leftIcon={
              <Icon
                name="user"
                type="font-awesome-5"
                color="#517fa4"
                size={35}
                iconStyle={{ paddingRight: 10 }}
              />
            }
          />
          <Input
            leftIcon={
              <Icon
                name="list"
                type="font-awesome-5"
                color="#517fa4"
                iconStyle={{ paddingRight: 10 }}
              />
            }
            placeholder="Edad"
            inputStyle={styles.containerInput}
           
            value={password}
            onChangeText={text => setpassword(text)}
          />

          <Button
            onPress={() => handleClick()}
            buttonStyle={styles.containerButton}
            title="Ingresar"
          />

          <Text
            style={{
              marginTop: 70,
              marginLeft: 115,
              color: '#517fa4',
              fontSize: 15,
            }}>
            Version 1.0
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  containerView: {
    marginTop: 40,
  },
  containerInput: {
    marginTop: 10,
  },
  containerButton: {
    marginBottom: 5,
    marginTop: 24,
    borderRadius: 10,
    backgroundColor: '#3D618A',
  },
});
