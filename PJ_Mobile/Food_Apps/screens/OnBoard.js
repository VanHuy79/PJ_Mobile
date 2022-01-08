import React from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import {PrimaryButton} from "../Component/button";

const OnBoardScreen = ({navigation}) => {
    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: '#ffffff'}}>
                <View style = {{height: 400}}>
                    <Image style ={{width:"100%", resizeMode:'contain',top: -210}} source ={require('../assets/img/banner.png')}/>
                </View>
                <View style = {style.textContainer}>
                  <View>
                    <Text style ={{fontSize:32, fontWeight: 'bold', textAlign:'center'}}>Ở đây có đồ ăn cho thú cưng</Text>
                    <Text style = {{ marginTop: 20,fontSize: 18,textAlign: 'center', color:"#908e8c"}}>Luôn mang đến cho bạn những lựa chọn tuyệt vời</Text>
                  </View>

                  <View style={style.indicatorContainer}>
                      <View style={style.currentIndicator} />
                      <View style={style.indicator}/>
                      <View style={style.indicator}/>
                  </View>
                </View>
                <View style={{justifyContent:'center',flex:1, alignItems:'center',}}>
                  <PrimaryButton  
                    onPress ={()=>navigation.navigate('Signin')}
                    title ="Start"/>
                </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    textContainer: {
      flex: 1,
      top:-100,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
    },
    indicatorContainer: {
      height: 50,
      flex: 1,
      top: 50,
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    currentIndicator: {
      height: 12,
      width: 30,
      borderRadius: 10,
      backgroundColor: '#e51f28',
      marginHorizontal: 5,
    },
    indicator: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: "#908e8c",
      marginHorizontal: 5,
    },
  });

export default OnBoardScreen;