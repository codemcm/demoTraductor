import React, { useState, useEffect } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Image
} from 'react-native';
import IconE from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements';
import generalStyle from '../styleBase/generalStyle';
import styles from '../client/styleClient';

import { getPalabraNombre } from '../../api_functions/getPalabraNombre';
function separator() {
    return <View style={generalStyle.separatorFL} />;
}

export default function ClientList({ route, navigation }) {
    const { ID, PALABRA, IMAGEN } = route.params; //id cliente
    const { imagePath } = '../imagenes/' + IMAGEN + '.jpg'
    var [clients, setClients] = useState('');
    const [load, setLoad] = useState(true);
    function Item({ objClient }) {
        return (
            <View>
                <TouchableOpacity
                    onPress={() =>console.log("animal")}
                    underlayColor="white">
                    <View style={styles.item}>
                        <Icon
                            name="arrow-circle-right"
                            type="font-awesome-5"
                            color="#517fa4"
                            iconStyle={{ marginRight: 10, marginTop: 4 }}
                        />
                        <Text style={styles.title}>{objClient.TRADUCCION}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    useEffect(() => {
        getPalabraNombre(PALABRA).then(function (data) {
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
                <Text>Palabra {PALABRA}</Text>
                <FlatList
                    style={styles.flatl}
                    data={clients}
                    renderItem={({ item }) => <Item objClient={item} />}
                    keyExtractor={item => String(item.client_id)}
                    ItemSeparatorComponent={separator}
                />
                <Text>Imagen del animal... {'./picture.jgp'} </Text>
                <Image
                    style={styles.tinyLogo}
                    source={require('./picture.png')}
                />
            </View>
        );
    }
}
