import React, {useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView, Text, Linking, TouchableOpacity,  Animated } from 'react-native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { useSelector } from 'react-redux'
import { getCV } from '../../redux/selectors'

import Photo from '../shared/Photo'
import Error from '../shared/Error'

import { useIsFocused } from '@react-navigation/native'

const Contact = () => {
        
        const isFocused = useIsFocused();
        var fadeAnim =new Animated.Value(0)
        
        useEffect(() => {
                Animated.timing(
                        fadeAnim,
                        {
                                toValue: 1,
                                duration: 1000,
                                useNativeDriver:true
                        }
                        ).start()
                }, [isFocused, fadeAnim])
                

        const data = useSelector(getCV)
        const [state, setstate] = useState(data)
        
        const [loaded] = useFonts({
                Custom1: require('../../../assets/fonts/RobotoCondensed-Bold.ttf'),       
                Custom2: require('../../../assets/fonts/RobotoCondensed-LightItalic.ttf')        
        });
              
        if (!loaded) {
        return <AppLoading />;
        }

        let toucheMe = (x, y) => {
                if(x == 0) {
                        Linking.openURL('tel:${'+y+'}')  
                }else if(x == 1) {
                        Linking.openURL('mailto:'+y)
                }else if(x == 2){
                        Linking.openURL('https://goo.gl/maps/KGvQ4eEF8rxv2PUW7')
                }else{
                        Linking.openURL(y)
                }
        }
        
        return ( 
                <ScrollView style={styles.container}>
                        <Animated.View style={{flex:1,  opacity: fadeAnim}}>
                                {state._W ? 
                                        state._W.me_contacter.map((item) =>{
                                                return (
                                                        <View key={item.id} style={{margin:10}}>
                                                        <Text style={styles.name}>{item.name} :</Text> 
                                                        <TouchableOpacity onPress={() => toucheMe(item.id, item.object)}>
                                                                <Text style={styles.object}>{item.object}</Text>
                                                        </TouchableOpacity>
                                                        </View>
                                                )
                                        })
                                        : <Error />}
                                        <Text style={{textAlign:'center', marginBottom:20}}>--------------------------------------------------</Text>
                                        {state._W ?
                                        state._W.loisirs.map((item) =>{
                                                return (
                                                        <View key={item.id} style={{margin:10}}>
                                                        <Text style={styles.name}>{item.name}</Text>
                                                        <Photo data={item.image}/>
                                                        </View>
                                                )
                                        })
                                        : <Error />}
                                <Text style={{textAlign:'center', marginBottom:20}}>--------------------------------------------------</Text>
                </Animated.View>
        </ScrollView>
          );
}

const styles = StyleSheet.create({
        container: {
                backgroundColor: 'white',
                padding:10,
                paddingTop:10,
                paddingBottom:50
        },
        name:{
                fontFamily:'Custom1',
                fontSize:25,
                textAlign:'center'
        },
        object: {
                fontFamily:'Custom2',
                fontSize:20,
                marginBottom:30,
                color: 'rgb(0,131,193)',
                textDecorationLine:'underline',
                textAlign:'center'
        }
});
export default Contact;