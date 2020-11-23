import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Picker,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";
import IconF from "react-native-vector-icons/FontAwesome";
import { Icon } from "react-native-elements";
import { ticketNew } from "../../api_functions/ticketNew";
import { lotListAll } from "../../api_functions/lotListAll";
import styleGeneral from "../styleBase/generalStyle";

export default function TicketAdd({ route, navigation }) {
  const { id } = route.params; //id cliente
  const { nombre } = route.PALABRA;
  const [selectedValue, setSelectedValue] = useState("");
  const [load, setLoad] = useState(true);
  const [element, setElement] = useState(
    [{ raffle_id: 1, description: "hola" }],
  );
  var [draw, setDraw] = useState({});
  function handleClick() {
    alert(selectedValue);
    if (selectedValue == "") {
      alert("debe llenar la rifa...");
    } else {
      setLoad(true);
      ticketNew(
        selectedValue, //rifa id
        id, //cliente id
        1, //user id
      ).then(function (response) {
        alert(response);
        setLoad(false);
      });
    }
  }
  useEffect(() => {
    lotListAll().then(function (data) {
      setDraw(data.data);
      data.data.map(function (info) {
        console.log("lot:" + info.description);
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
    <ScrollView style={styleGeneral.containerView}>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "center",
          }}
        >
          <Icon name="ticket" type="font-awesome" size={70} color="#27587F" />
          <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 25 }}>
            {" "}
            {nombre}
            {" "}
          </Text>
        </View>

        <Text style={styleGeneral.textStyle}>Seleccione la rifa</Text>

        <Picker
          selectedValue={selectedValue}
          style={styleGeneral.pickerStyle}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Seleccione un elemento" value={0} />
          {draw.map((item) => (
            <Picker.Item
              key={item.raffle_id}
              label={item.description}
              value={item.raffle_id}
            />
          ))}
        </Picker>
        <Button
          onPress={() => handleClick()}
          buttonStyle={styleGeneral.buttonDetails}
          icon={<IconF name="send-o" size={15} color="white" />}
          title=" Registrar"
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  marginButon: {
    margin: 10,
  },
  marginText: {
    marginLeft: 10,
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
