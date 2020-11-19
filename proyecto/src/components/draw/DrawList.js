import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {lotListAll} from '../../api_functions/lotListAll';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import styleGeneral from '../styleBase/generalStyle';
import styleDraw from './styleDraw';
function separator() {
  return <View style={styleGeneral.separatorFL} />;
}

export default function DrawList({navigation}) {
  const [load, setLoad] = useState(true);
  var [draw, setDraw] = useState({});

  function Item({objDraw}) {
    return (
      <View>
        <TouchableOpacity
          key={objDraw.raffle_id}
          onPress={() =>
            navigation.navigate('PrizeAdd', {
              id: objDraw.raffle_id,
              name: objDraw.description,
            })
          }
          underlayColor="white">
          <View style={styleGeneral.itemFL}>
            <IconM
              name="clover"
              size={24}
              color="#296E7F"
              style={styleDraw.drawIcon}
            />
            <Text style={styleDraw.title}>{objDraw.raffle_id}</Text>
            <Text style={styleDraw.title}>{objDraw.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    lotListAll().then(function(data) {
      setDraw(data.data);
      setLoad(false);
    });
  }, []);

  {
    if (load) {
      return (
        <View style={styleGeneral.containerLoading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }
  return (
    <View style={styleGeneral.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DrawAdd')}
        underlayColor="white">
        <View style={styleGeneral.itemFL}>
          <IconM
            name="clover"
            size={24}
            color="#B4EAF0"
            style={styleDraw.drawIcon}
          />
          <Text style={styleDraw.title}>Agregar nueva rifa</Text>
        </View>
      </TouchableOpacity>
      <FlatList
        style={styleGeneral.flatl}
        data={draw}
        renderItem={({item}) => <Item objDraw={item} />}
        keyExtractor={item => String(item.raffle_id)}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}
