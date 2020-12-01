import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default function Menu({ navigation }) {
  return (
    <ScrollView style={styles.viewDetails}>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          <Button
            title="Animales"
            onPress={() => navigation.navigate('Animales')}
            icon={
              <Icon
                name="gift"
                size={25}/*Tamano de los iconos*/
                color="white"/*Color de los iconos*/
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Saludos"
            onPress={() => navigation.navigate('SaludosListar')}
            icon={
              <Icon
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Numeros"
            onPress={() => navigation.navigate('NumeroListar')}
            icon={
              <Icon
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Colores"
            onPress={() => navigation.navigate('ColoresListar')}
            icon={
              <Icon
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Verduras"
            onPress={() => navigation.navigate('VerdurasListar')}
            icon={
              <Icon
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />

        </View>
        <View style={styles.containerRight}>
          <Button
            title="Cuerpo"
            onPress={() => navigation.navigate('ListaCuerpo')}
            icon={
              <IconAnt
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Cosas"
            onPress={() => navigation.navigate('CosasListar')}
            icon={
              <IconAnt
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Familia"
            onPress={() => navigation.navigate('FamiliaListar')}
            icon={
              <IconAnt
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Frutas"
            onPress={() => navigation.navigate('FrutaListar')}
            icon={
              <IconAnt
                name="gift"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewDetails: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
  },
  containerLeft: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  containerRight: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  buttons1: {
    marginTop: 2,
    padding: 35,
    marginBottom: 10,
    backgroundColor: '#3D618A',
  },
  buttons2: {
    marginTop: 2,
    marginBottom: 10,
    padding: 35,
    backgroundColor: '#3D618A',
  },
});
