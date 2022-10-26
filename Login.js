import React from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Welcome() {
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={300} 
                    animation={'flipInY'}
                    style={styles.logo}
                    source={require('../Assets/Help-removebg-preview.png')}
                    resizeMode= 'contain'
                />
                
            </View>
            
            

            <Animatable.View animation='fadeInUp' delay={1000} style={styles.containerForm}>
                
                <Text style={styles.bemvindo}>Bem vindo(a) ao Help Earth </Text>

                <Text style={styles.title}>Email</Text>
                <TextInput style={styles.input}/>

                <Text style={styles.title}>Senha</Text>
                <TextInput style={styles.input}/>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.buttonRegisterText}>É novo por aqui? Clique aqui e cadastre-se</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Feed')}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },
    containerLogo:{
        flex: 1,
    
        //backgroundColor: 'red'
    },
    logo:{
        flex: 1,
        width: '100%',
    },
    bemvindo:{
        alignSelf: 'center',
        fontSize: 18,
        marginBottom: 40
    },
    containerForm:{
        marginTop: -60,
        flex: 1,
        marginStart: '5%',
        marginEnd: '5%'
    },
    title:{
        fontSize: 18,
        marginTop: 10
    },
    input:{
        borderBottomWidth: 1,
    },
    buttonRegister:{
        alignSelf: 'center',
        marginTop: 30
    },
    buttonRegisterText:{

    },
    button:{
        alignSelf: "center",
        marginTop: 40,
        backgroundColor: '#bdecb6',
        paddingVertical: 8,
        width: '100%',
        borderRadius: 50
        
    },
    buttonText:{
        fontSize:20,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
