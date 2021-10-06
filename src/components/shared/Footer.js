import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'


const Footer = () => {
        const [loaded] = useFonts({
                Custom1: require('../../../assets/fonts/RobotoCondensed-Bold.ttf')
        });
              
        if (!loaded) {
        return <AppLoading />;
        }
        return ( 
                <View style={styles.container}>
                        <Text style={styles.title}>Version 1.0.0</Text>
                </View>
         );
}
 const styles = StyleSheet.create({
         container: {
                backgroundColor: 'white',
                height:30,
                justifyContent:'center'                
         },
         title: {
                color:'black',
                fontFamily:'Custom1',
                textAlign:'center'
         }
 });
export default Footer;