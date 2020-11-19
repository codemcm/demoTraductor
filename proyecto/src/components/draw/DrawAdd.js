import React from 'react';
import {ScrollView, View, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {lotNew} from '../../api_functions/lotNew';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleGeneral from '../styleBase/generalStyle';
import {Input} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
export default function drawAdd({route, navigation}) {
  const [load, setLoad] = useState(false);
  const [description, setdescription] = useState('');
  const [startDate, setstartDate] = useState(new Date());
  const [raffleDate, setraffleDate] = useState('');
  const [user, setUser] = useState(1);

  function handleClick() {
    if (description == '') {
      alert('debe llenar la descripcion');
    } else {
      setLoad(true);
      lotNew(description, startDate, raffleDate, user).then(function(response) {
        setLoad(false);
        alert(response);
      });
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
      <ScrollView style={styleGeneral.container}>
        <View>
          <Text style={styleGeneral.marginText}>Nombre del sorteo</Text>
          <Input
            placeholder="* Nombre del sorteo"
            value={description}
            leftIcon={
              <Icon
                name="pencil"
                type="font-awesome"
                size={styleGeneral.iconInput.fontSize}
                color={styleGeneral.iconInput.color}
              />
            }
            onChangeText={text => setdescription(text)}
          />
          <Text style={styleGeneral.marginText}>Comienza la rifa</Text>
          <DatePicker
            style={{width: 300}}
            date={startDate}
            mode="date"
            placeholder="Inicio"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginRight: 10,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              setstartDate(date);
            }}
          />

          <Text style={styleGeneral.marginText}>Fecha de fin</Text>
          <DatePicker
            style={{width: 300}}
            date={raffleDate}
            mode="date"
            placeholder="Fin del sorteo"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginRight: 10,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              setraffleDate(date);
            }}
          />
          <Button
            onPress={() => handleClick()}
            buttonStyle={styleGeneral.buttonDetails}
            title="Registrar"
          />
        </View>
      </ScrollView>
    </>
  );
}
