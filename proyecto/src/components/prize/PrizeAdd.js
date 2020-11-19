import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import styleGeneral from "../styleBase/generalStyle";

import { Input } from "react-native-elements";
import { Button } from "react-native-elements";
import IconF from "react-native-vector-icons/FontAwesome";
import { prizeNew } from "../../api_functions/prizeNew";
import { Icon } from "react-native-elements";
export default function Ticket({ route, navigation }) {
  const { id } = route.params;
  const { name } = route.params;
  var [producto, setProducto] = useState("");

  function handleClick() {
    if (id == "") {
      alert("no hay un id de la rifa...");
    } else {
      prizeNew(
        producto, //producto
        id, //rifa id
        1, //user
      ).then(function (response) {
        alert(response);
      });
    }
  }

  return (
    <ScrollView style={styleGeneral.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "center",
          }}
        >
          <Icon
            name="gift"
            type="font-awesome"
            size={70}
            color={styleGeneral.iconInput.color}
          />
          <Text style={{ marginTop: 20, marginLeft: 15, fontSize: 25 }}>
            {" "}
            {name}
            {" "}
          </Text>
        </View>

        <Text
          style={{
            marginTop: 20,
            marginLeft: 10,
            marginBottom: 20,
            fontSize: 20,
          }}
        >
          Nombre del premio
        </Text>
        <Input
          value={producto}
          placeholder="Nombre del premio"
          leftIcon={<Icon
            name="pencil"
            type="font-awesome"
            color={styleGeneral.iconInput.color}
          />}
          onChangeText={(text) => setProducto(text)}
        />
        <View style={{ flex: 1, justifyContent: "space-between" }} />
        <Button
          onPress={() => handleClick()}
          buttonStyle={styleGeneral.buttonDetails}
          title="Registrar"
        />
      </View>
    </ScrollView>
  );
}
