import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


export default function TaskList({data, handleDelete}){
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={ () => { handleDelete(data) }}>
                <Ionicons name="md-checkmark-circle" size={30} color="#121212"/>
            </TouchableOpacity>
            <View>
                <Text style={styles.task}> {data.task} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width: 1,
            height: 3,
        },
        task:{
            color:'#121212',
            fontSize: 30,
            paddingLeft: 8,
            paddingRight: 20,

        }
    }
})