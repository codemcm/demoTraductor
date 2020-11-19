import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Picker,
} from 'react-native';
import {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {clientNew} from '../../api_functions/clientNew';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleGeneral from '../styleBase/generalStyle';
import {Input} from 'react-native-elements';
import {Alert} from 'react-native';
export default function clientAdd({route, navigation}) {
  const [name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [cellular, setCellular] = useState('');
  const [user, setUser] = useState(1);
  const [load, setLoad] = useState(false);
  function handleClick() {
    if (cellular == '') {
      alert('Campo celular es obligatorio');
    } else {
      if (name == '') {
        alert('debe llenar el nombre');
      } else {
        setLoad(true);
        clientNew(name, last_name, cellular, description, user).then(function(
          response,
        ) {
          setLoad(false);
          console.log(response);
          if (response.status == 'successfull') {
            navigation.push('ClientList');
            Alert.alert(response.message);
          } else {
            alert(JSON.stringify(response.message.detail));
          }
        });
        setName('');
        setLastName('');
        setCellular('');
        setDescription('');
      }
    }
  }
  if (load) {
    return (
      <View style={styleGeneral.containerLoading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.viewDetail}>
          <View style={styles.viewDetail}>
            <Text style={styles.marginText}>Nombre</Text>
            <Input
              placeholder="* Nombre"
              value={name}
              leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
              onChangeText={text => setName(text)}
            />
            <Text style={styles.marginText}>Apellidos</Text>
            <Input
              placeholder="Apellidos"
              value={last_name}
              leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
              onChangeText={text => setLastName(text)}
            />
            <Text style={styles.marginText}>Celular</Text>
            <Input
              placeholder="* Celular"
              value={cellular}
              leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
              onChangeText={text => setCellular(text)}
            />
            <Text style={styles.marginText}>Notas</Text>
            <Input
              placeholder="Notas"
              value={description}
              leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
              onChangeText={text => setDescription(text)}
            />
            <Button
              onPress={() => handleClick()}
              buttonStyle={styleGeneral.buttonDetails}
              title="Registrar"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  marginButon: {
    margin: 10,
  },
  viewDetail: {
    backgroundColor: 'white',
    padding: 3,
  },
  marginText: {
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 10,
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
