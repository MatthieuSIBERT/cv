import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Error = () => {
        return ( 
                <View style={styles.container}>
                        <Text style={styles.title}>Veuillez connecter votre mobile à Internet</Text>
                </View>
         );
}

const styles = StyleSheet.create({
        container:{
               height: '100%',
               justifyContent:'center',
        },
        title: {
                fontWeight:'bold',
                textAlign:'center',
                fontSize:30,
                textAlignVertical:'center'
        }
});

export default Error;