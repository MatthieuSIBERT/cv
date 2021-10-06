import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const Item = (props) => {

        const [loaded] = useFonts({
                Custom1: require('../../../assets/fonts/RobotoCondensed-Bold.ttf'),       
                Custom2: require('../../../assets/fonts/RobotoCondensed-LightItalic.ttf')        
        });
              
        if (!loaded) {
        return <AppLoading />;
        }

        return (
                <View >
                         {props.data ? 
                         props.data.map((item) =>{
                                return (
                                        <View key={item.id} style={styles.container}>
                                                <Text style={styles.title}>{item.name}</Text>
                                        </View>
                                )
                        })
                       : <Text></Text>}
                </View>
          );
}
 
const styles = StyleSheet.create({
       title: {
               fontFamily: 'Custom2',
               textAlign:'center',
               fontSize:15
       }
});
export default Item;