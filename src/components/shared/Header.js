import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

const Header = () => {

        const [loaded] = useFonts({
                Custom1: require('../../../assets/fonts/RobotoCondensed-Bold.ttf')
        });
              
        if (!loaded) {
        return <AppLoading />;
        }

        return ( 
                <View style={styles.container}>
                       
                        <Text style={styles.title}>Matthieu SIBERT</Text>
                        <Text style={styles.subtitle}>Mobile & Web Developer</Text>                       
                        <Image source={require('../../../assets/icon2.png')} style={styles.image}/>
                </View>
         );
}

const styles = StyleSheet.create({
        container: {
                 backgroundColor:'rgb(20,20,20)',
                 flex:1
        },
        title:{
                color:'white',
                alignSelf:'center',
                fontSize:45,
                marginTop:50,
                fontFamily:'Custom1'
        },
        subtitle:{
                color:'white',
                alignSelf:'center',
                fontSize:17,
                marginBottom:20,
                fontFamily:'Custom1'
        },
        image:{
                height:200,
                width:200,
                alignSelf:'center'
        }
});
 
export default Header