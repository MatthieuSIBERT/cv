import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native'

import {Provider} from 'react-redux'
import store from './src/redux/store'

import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

import {NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/components/main/Home'
import Skills from './src/components/main/Skills'
import Education from './src/components/main/Education'
import Experience from './src/components/main/Experience'
import Contact from './src/components/main/Contact'
import Footer from './src/components/shared/Footer'

const Tab = createBottomTabNavigator();

export default function App() {
	
	const [loaded] = useFonts({
                Custom1: require('./assets/fonts/RobotoCondensed-Bold.ttf'),       
                Custom2: require('./assets/fonts/RobotoCondensed-LightItalic.ttf')        
        });

        if (!loaded) {
		return <AppLoading />;
        }
	
	return (
		<Provider store={store} >
			<SafeAreaView  style={styles.container}>
				<NavigationContainer>
					<Tab.Navigator
						mode="modal"
						screenOptions={
							({route})=> ({
								tabBarActiveTintColor:'black',
								tabBarInactiveTintColor:'white',
								headerStyle: {backgroundColor:'rgb(0,121,193)'},
								headerTitleStyle:{color:'white'},headerTitleAlign:'center',
								tabBarStyle:{backgroundColor:'rgb(0,121,193)',justifyContent:'center', height:50},
								tabBarIcon: ({focused}) =>{
									if(route.name == "Experiences"){
										return(
											focused ? <Image source={require('./assets/menu/blackWork.png')} style={{width:30, height:30}}/> :  <Image source={require('./assets/menu/whiteWork.png')} style={{width:30, height:30}}/>
										)
									}else if(route.name=='Acceuil'){
										return(
											focused ? <Image source={require('./assets/menu/blackHome.png')} style={{width:30, height:30}}/> :  <Image source={require('./assets/menu/whiteHome.png')} style={{width:30, height:30}}/>
										)
									}else if(route.name=='Formation'){
										return(
											focused ? <Image source={require('./assets/menu/blackEducation.png')} style={{width:30, height:30}}/> :  <Image source={require('./assets/menu/whiteEducation.png')} style={{width:30, height:30}}/>
										)
									}else if(route.name=='Compétences'){
										return(
											focused ? <Image source={require('./assets/menu/blackSkills.png')} style={{width:30, height:30}}/> :  <Image source={require('./assets/menu/whiteSkills.png')} style={{width:30, height:30}}/>
										)
									}else{
										return(
											focused ? <Image source={require('./assets/menu/blackContact.png')} style={{width:30, height:30}}/> :  <Image source={require('./assets/menu/WhiteContact.png')} style={{width:30, height:30}}/>
										)
									}
								}
							})
						}>
						<Tab.Screen name="Acceuil" component={Home}/>
						<Tab.Screen name="Compétences" component={Skills}/>
						<Tab.Screen name="Formation" component={Education} />
						<Tab.Screen name="Experiences" component={Experience} />
						<Tab.Screen name="Me Contacter & Mes loisirs" component={Contact} />
					</Tab.Navigator>
					<Footer />
				</NavigationContainer>
				<StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
			</SafeAreaView>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
    		flex: 1
	},
});