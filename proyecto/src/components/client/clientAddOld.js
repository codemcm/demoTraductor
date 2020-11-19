import React from 'react';
import {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import styleGeneral from '../styleBase/generalStyle';

import {Button} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {clientNew} from '../../api_functions/clientNew';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: '',
    last_name: '',
    description: '',
    cellular: '',
    user: 1,
  };
  handleClick = () => {
    if (this.state.cellular == '') {
      alert('Campo celular es obligatorio');
    } else {
      if (this.state.name == '') {
        alert('debe llenar el nombre');
      } else {
        clientNew(
          this.state.name,
          this.state.last_name,
          this.state.cellular,
          this.state.description,
          this.state.user,
        ).then(function(response) {
          alert(response);
        });
        this.setState({
          name: '',
          last_name: '',
          cellular: '',
          description: '',
        });
      }
    }
  };
  render(props) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.viewDetail}>
            <View style={styles.viewDetail}>
              <Text style={styles.marginText}>Nombre</Text>
              <Input
                placeholder="Nombre"
                value={this.state.name}
                leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
                onChangeText={text => this.setState({name: text})}
              />
              <Text style={styles.marginText}>Apellidos</Text>
              <Input
                placeholder="Apellidos"
                value={this.state.last_name}
                leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
                onChangeText={text => this.setState({last_name: text})}
              />
              <Text style={styles.marginText}>Celular</Text>
              <Input
                placeholder="Celular"
                value={this.state.cellular}
                leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
                onChangeText={text => this.setState({cellular: text})}
              />
              <Text style={styles.marginText}>Notas</Text>
              <Input
                placeholder="Notas"
                value={this.state.description}
                leftIcon={{type: 'font-awesome', name: 'pencil', color: 'gray'}}
                onChangeText={text => this.setState({description: text})}
              />
              <Button
                onPress={this.handleClick}
                buttonStyle={styleGeneral.buttonDetails}
                icon={<Icon name="send-o" size={15} color="white" />}
                title="Registrar"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  marginButon: {
    margin: 10,
  },
  viewDetail: {
    backgroundColor: 'white',
    padding: 3,
  },
  marginText: {
    marginTop: 5,
    marginBottom: 4,
    marginLeft: 10,
  },
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
