import React from 'react';
import {Component} from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';

import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {lotNew} from '../../api_functions/lotNew';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styleGeneral from '../styleBase/generalStyle';
export default class RifaAdd extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    description: '',
    startDate: '',
    raffleDate: '',
    user: 1,
  };
  handleClick = () => {
    if (this.state.name == '') {
      alert('debe llenar el nombre');
    } else {
      lotNew(
        this.state.description,
        this.state.startDate,
        this.state.raffleDate,
        this.state.user,
      ).then(function(response) {
        alert(response);
      });
    }
  };
  render(props) {
    return (
      <>
        <ScrollView style={styleGeneral.containerView}>
          <View>
            <Text style={styleGeneral.marginText}>Comienza la rifa</Text>
            <Input
              placeholder="Comienza la rifa"
              leftIcon={{type: 'font-awesome', name: 'pencil'}}
              onChangeText={text => this.setState({startDate: text})}
            />
            <Text style={styleGeneral.marginText}>Descripción</Text>
            <Input
              placeholder="Descripción"
              leftIcon={{type: 'font-awesome', name: 'pencil'}}
              onChangeText={text => this.setState({description: text})}
            />
            <Text style={styleGeneral.marginText}>Fecha de cierre</Text>
            <Input
              placeholder="Fecha de cierre"
              leftIcon={{type: 'font-awesome', name: 'pencil'}}
              onChangeText={text => this.setState({raffleDate: text})}
            />

            <Button
              onPress={this.handleClick}
              buttonStyle={styleGeneral.buttonDetails}
              icon={<Icon name="send-o" size={15} color="white" />}
              title="Registrar"
            />
          </View>
        </ScrollView>
      </>
    );
  }
}
