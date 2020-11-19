// @ts-nocheck
import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import {CheckBox} from 'react-native-elements';
import loginStyle from './loginStyle';
export default function Login({navigation}) {
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
          Yael aplicacion
        </Text>
        <View
          style={{
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            justifyContent: 'center',
          }}>
          <Input
            placeholder="Usuario"
            inputStyle={styles.containerInput}
            leftIcon={
              <Icon
                name="user-tie"
                type="font-awesome-5"
                color="#517fa4"
                size={35}
                iconStyle={{paddingRight: 10}}
              />
            }
          />
          <Input
            leftIcon={
              <Icon
                name="key"
                type="font-awesome"
                color="#517fa4"
                iconStyle={{paddingRight: 10}}
              />
            }
            placeholder="Contraseña"
            inputStyle={styles.containerInput}
            secureTextEntry={true}
          />

          <Button
            onPress={() => navigation.navigate('My app')}
            buttonStyle={styles.containerButton}
            title="Ingresar"
          />

          <Text
            style={{
              marginTop: 70,
              marginLeft: 5,
              color: '#517fa4',
              fontSize: 15,
            }}>
            Materia...
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