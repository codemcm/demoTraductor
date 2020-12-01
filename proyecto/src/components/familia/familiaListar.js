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
import styles from '../client/styleClient';

import {getPalabrasPorTipo} from '../../api_functions/getPalabrasPorTipo';
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
            navigation.navigate('FamiliaDetalle', {
              ID: objClient.ID,
              PALABRA: objClient.PALABRA,
              IMAGEN: objClient.nombreimagen,
            })
          }
          underlayColor="white">
          <View style={styles.item}>
            <Icon
              name="arrow-circle-right"
              type="font-awesome-5"
              color="#517fa4"
              iconStyle={{marginRight: 10, marginTop: 4}}
            />
            <Text style={styles.title}>{objClient.PALABRA}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  useEffect(() => {
    getPalabrasPorTipo(6).then(function(data) {
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
