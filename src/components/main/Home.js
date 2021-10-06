import React, {useEffect} from 'react'

import { StyleSheet, Animated, View, } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import Header from '../shared/Header';

const Home = () => {

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

        return (
               <View style={styles.container}>
                        <Animated.View style={{flex:1,  opacity: fadeAnim}}>
                                <Header />
                        </Animated.View>
               </View>
              
          );
}
const styles = StyleSheet.create({
        container: {
                flex:1
        }
});

export default Home;