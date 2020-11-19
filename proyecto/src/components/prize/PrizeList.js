import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  View,
  ActivityIndicator,
  ScrollView,
  Picker,
} from 'react-native';
import {lotListAll} from '../../api_functions/lotListAll';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from 'react-native-elements';
import styleGeneral from '../styleBase/generalStyle';
import {prizeGetByDraw} from '../../api_functions/prizeGetByDraw';
import styleDraw from '../draw/styleDraw';

function separator() {
  return <View style={styleGeneral.separatorFL} />;
}

export default function PrizeList({navigation}) {
  const [load, setLoad] = useState(true);
  const [selectedValue, setSelectedValue] = useState('java');
  const [prizes, setPrizes] = useState();
  var [draw, setDraw] = useState({});
  function Item({objPrize}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => console.log('prize element')}
          underlayColor="white">
          <View style={styleGeneral.itemFL}>
            <IconM
              name="clover"
              size={24}
              color="#585E6F"
              style={{marginRight: 20}}
            />
            <Text style={styleDraw.title}>{objPrize.product}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function getPrizes(itemValue) {
    setLoad(true);
    setSelectedValue(itemValue);
    prizeGetByDraw(itemValue).then(function(data) {
      setPrizes(data.data);
      console.log(data.data);
      data.data.map(function(info) {
        console.log('PRIZE:' + info.product);
      });
      setLoad(false);
    });
  }
  useEffect(() => {
    lotListAll().then(function(data) {
      setDraw(data.data);
      data.data.map(function(info) {
        console.log('lot:' + info.description);
      });
      setLoad(false);
    });
  }, []);
  if (load) {
    return (
      <View style={styleGeneral.containerLoading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styleGeneral.containerView}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          marginBottom: 10,
          justifyContent: 'center',
        }}>
        <Icon name="gift" type="font-awesome" size={70} color="#27587F" />
        <Text style={{marginTop: 20, marginLeft: 15, fontSize: 25}}>
          PREMIOS
        </Text>
      </View>

      <Text style={styleGeneral.textStyle}> Seleccione la rifa:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styleGeneral.pickerStyle}
        onValueChange={(itemValue, itemIndex) => getPrizes(itemValue)}>
        <Picker.Item label="Seleccione un elemento" value={0} />
        {draw.map(item => (
          <Picker.Item label={item.description} value={item.raffle_id} />
        ))}
      </Picker>
      <FlatList
        style={styleGeneral.flatl}
        data={prizes}
        renderItem={({item}) => <Item objPrize={item} />}
        keyExtractor={item => String(item.raffle_id)}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
}
