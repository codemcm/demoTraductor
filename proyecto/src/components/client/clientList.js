import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import IconE from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'react-native-elements';
import generalStyle from '../styleBase/generalStyle';
import styles from './styleClient';

import {clientListAll} from '../../api_functions/clienListAll';
function separator() {
  return <View style={generalStyle.separatorFL} />;
}

export default function ClientList({navigation}) {
  var [clients, setClients] = useState('');
  const [load, setLoad] = useState(true);
  function Item({objClient}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TicketAdd', {
              id: objClient.client_id,
              nombre: objClient.name,
            })
          }
          underlayColor="white">
          <View style={styles.item}>
            <Icon
              name="user-circle"
              type="font-awesome-5"
              color="#517fa4"
              iconStyle={{marginRight: 10, marginTop: 4}}
            />

            <Text style={styles.title}>{objClient.name}</Text>
            <Text
              style={{
                color: 'orange',
                marginTop: 3,
                fontSize: 18,
              }}>
              {' '}
              {objClient.cell}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  useEffect(() => {
    clientListAll().then(function(data) {
      setClients(data.data);
      setLoad(false);
    });
  }, []);

  {
    if (load) {
      return (
        <View style={generalStyle.containerLoading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    return (
      <View style={generalStyle.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ClientNew')}
          underlayColor="white">
          <View style={styles.item}>
            <Icon
              name="user-plus"
              type="font-awesome-5"
              color="#514C6C"
              iconStyle={{marginRight: 10, marginTop: 4}}
            />
            <Text style={styles.title}>Agregar cliente nuevo</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          style={styles.flatl}
          data={clients}
          renderItem={({item}) => <Item objClient={item} />}
          keyExtractor={item => String(item.client_id)}
          ItemSeparatorComponent={separator}
        />
      </View>
    );
  }
}
