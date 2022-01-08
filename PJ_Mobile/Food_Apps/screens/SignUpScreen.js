import React,{Component} from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInSreen from "./SignInScreen";

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.gotoSignin = this.gotoSignin.bind(this);
    }

    gotoSignin(){
        this.navigation.navigate('Signin')
    }
    render(){
        return(
            <SafeAreaView style = {{paddingHorizontal:15, flex:1,background:"white"}}>
            <ScrollView >
                <View style={{flexDirection :'row',alignContent: 'center',justifyContent: 'center', marginTop :20}}>
                    <Text style ={{fontWeight: 'bold', fontSize:50, color:"#e51f28"}}>PETCITY</Text>
                </View>

                <View style = {{marginTop: 15}}>
                    <Text style = {{fontWeight:'bold', fontSize:20, color:'#000'}}>
                        Hãy đăng ký để nhận nhiều ưu đãi !
                    </Text>
                </View>

                <View style ={{marginTop:15 }}>
                    <View style= {STYLES.inputContainer}>
                        <Image source ={require("../assets/icon/user.png")}
                        style ={{width:25, height:25, marginTop:15,}}/>
                        <TextInput placeholder = "Username" style={STYLES.input}/>
                    </View>
                </View>

                <View style ={{marginTop:15}}>
                    <View style= {STYLES.inputContainer}>
                        <Image source ={require("../assets/icon/email.png")}
                        style ={{width:25, height:25, marginTop:15,}}/>
                        <TextInput placeholder = "Email" style={STYLES.input}/>
                    </View>
                </View>

                <View style ={{marginTop:20 }}>
                    <View style= {STYLES.inputContainer}>
                        <Image source ={require("../assets/icon/lock.png")}
                        style ={{width:25, height:25, marginTop:15,}}/>
                        <TextInput placeholder = "Password" style={STYLES.input} secureTextEntry/>
                    </View>
                </View>
                <View style={STYLES.btnPrimary}>
                    <Text style={{fontWeight:'bold',fontSize:21,color:'white'}}>
                        Đăng Ký
                    </Text>
                </View>

                <View style={{marginVertical:20,flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
                    <View style={STYLES.line}></View>
                        <Text style={{fontWeight:'bold', marginHorizontal: 5, fontSize: 16}}>
                            Hoặc
                        </Text>
                    <View style={STYLES.line}></View>
                </View>

                <View style={{flexDirection: 'row',justifyContent :'space-between',}}>
                    <View style={STYLES.btnSeondary}>
                        <Text style={{fontWeight:'bold',fontSize:14}}>
                            Đăng ký với
                        </Text>
                        <Image source ={require("../assets/icon/facebook.png")}
                        style ={{width:20, height:20,marginLeft:8}}/>
                    </View>

                    <View style={{width:5}}></View>

                    <View style={STYLES.btnSeondary}>
                        <Text style={{fontWeight:'bold',fontSize:14}}>
                            Đăng ký với
                        </Text>
                        <Image source ={require("../assets/icon/gmail.png")}
                        style ={{width:20, height:20,marginLeft: 8}}/>
                    </View> 
                </View>

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30,marginBottom:20,}}>
                    <Text style={{color:'#a5a5a5', fontWeight:'bold', fontSize: 20,}}>
                        Đã có tài khoản ?
                    </Text>
                    <TouchableOpacity onPress ={()=> this.navigation.navigate('Signin')}>
                        <Text style={{color:"#ff2d5f", fontWeight:'bold', marginLeft:5, fontSize: 20,}}>
                            Đăng nhập
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
};

const STYLES = StyleSheet.create({
    inputContainer: {
        flexDirection:'row',
        marginTop:20,
        borderBottomWidth: 1,
    },
    input:{
        color: "#a5a5a5",
        paddingLeft:10,
        flex :1,
        fontSize: 18,
    },
    btnPrimary:{
        backgroundColor:"#e51f28",
        height: 50,
        marginTop: 30,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line:{
        height:2,
        width:20,
        backgroundColor:'#555555',
    },
    btnSeondary:{
        height:50,
        borderWidth:2,
        borderRightColor: '#a5a5a5',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        flexDirection:'row'
    }

})


