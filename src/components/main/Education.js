import React, {useState, useEffect} from 'react'
import { StyleSheet, View, ScrollView, Text, Animated } from 'react-native'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import { useSelector } from 'react-redux'
import { getCV } from '../../redux/selectors'

import { useIsFocused } from '@react-navigation/native'

import Photo from '../shared/Photo'
import Error from '../shared/Error'

const Education = () => {

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

        return ( 
                <ScrollView style={styles.container}>
                         <Animated.View style={{flex:1,  opacity: fadeAnim}}>
                                {state._W ? 
                                state._W.education.map((item) =>{
                                        return (
                                                <View key={item.id}>
                                                        <Text style={styles.date}>{item.date}</Text>
                                                        <Text style={styles.poste}>{item.intitule}</Text>
                                                        <Photo data={item.image}/>
                                                        <Text style={styles.universite}>{item.universite}</Text>
                                                        <Text style={{textAlign:'center', marginBottom:20}}>--------------------------------------------------</Text>
                                                </View>
                                        )
                                })
                                : <Error />}
                        </Animated.View>
                </ScrollView>
         );
}
const styles = StyleSheet.create({
        container:{
                backgroundColor: 'white',
                padding:10,
                paddingTop:10,
                paddingBottom:50
        },
        date: {
                fontSize:20,
                textAlign:'center',
                fontFamily: 'Custom1'
        },
        poste: {
                fontSize:17,
                textAlign:'center',
                fontFamily: 'Custom1'
        },
        universite:{
                textAlign:'center',
                fontFamily: 'Custom2',
                marginBottom:20,
        }
});

export default Education