import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
  Picker,
} from 'react-native';
import {lotListAll} from '../../api_functions/lotListAll';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import styleGeneral from '../styleBase/generalStyle';
function separator() {
  return <View style={styleGeneral.separatorFL} />;
}

export default function WinnerList({navigation}) {
  const [load, setLoad] = useState(true);
  const [selectedValue, setSelectedValue] = useState('java');
  var [draw, setDraw] = useState({});
  function Item({objDraw}) {
    return (
      <View>
        <TouchableOpacity
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
    <ScrollView>
      <View style={styleGeneral.containerView}>
        <Text style={styleGeneral.marginText}> Seleccione la rifa:</Text>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          {draw.map(item => (
            <Picker.Item label={item.description} value={item.raffle_id} />
          ))}
        </Picker>
      </View>
    </ScrollView>
  );
}
