import React from 'react';

import {Image, StyleSheet} from 'react-native'

const Photo = (props) => {
        const photo = {uri: props.data}
        return (
                <Image source={photo} style={styles.image}/>
        )
}
 
const styles = StyleSheet.create({
        image: {
                height:70,
                width:70,
                alignSelf:'center',
                margin:20
        }
});
export default Photo;