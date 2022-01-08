import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const PrimaryButton = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={style.btnContainer}>
          <Text style={style.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
const SecondButton = ({title, onPress = () => {}}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View style={{...style.btnContainer, backgroundColor:"white"}}>
          <Text style={{...style.title, color:"#e51f28"}}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const style = StyleSheet.create({
    title: {color: "#ffffff", fontWeight: 'bold', fontSize: 25},
    btnContainer: {
        backgroundColor: '#e51f28',
        height: 60,
        width: 250,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export  {PrimaryButton,SecondButton};