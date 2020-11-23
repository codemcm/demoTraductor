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
                name="address-book"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Saludos"
            onPress={() => navigation.navigate('ClientList')}
            icon={
              <Icon
                name="address-book"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Numeros"
            onPress={() => navigation.navigate('ClientList')}
            icon={
              <Icon
                name="address-book"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
           <Button
            title="Colores"
            onPress={() => navigation.navigate('ClientList')}
            icon={
              <Icon
                name="address-book"
                size={25}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons1}
          />
          <Button
            title="Verduras"
            onPress={() => navigation.navigate('ClientList')}
            icon={
              <Icon
                name="address-book"
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
            onPress={() => navigation.navigate('PrizeList')}
            icon={
              <IconAnt
                name="gift"
                size={15}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons2}
          />
          <Button
            title="Cosas"
            onPress={() => navigation.navigate('PrizeList')}
            icon={
              <IconAnt
                name="gift"
                size={15}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons2}
          />
          <Button
            title="Familia"
            onPress={() => navigation.navigate('PrizeList')}
            icon={
              <IconAnt
                name="gift"
                size={15}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons2}
          />
           <Button
            title="Frutas"
            onPress={() => navigation.navigate('PrizeList')}
            icon={
              <IconAnt
                name="gift"
                size={15}
                color="white"
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={styles.buttons2}
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

    backgroundColor: '#4F7CAF',
  },
});
