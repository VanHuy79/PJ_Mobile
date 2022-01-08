import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image, FlatList} from 'react-native';
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

let productjs1=require("../consts/history.json")

export default class History extends Component {
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.refreshFlatlist= this.refreshFlatlist.bind(this);
        this.gotoDetail = this.gotoDetail.bind(this);
        this.state ={
            data: productjs1.history,
        }
    }

    gotoDetail(product){
        console.log(product);
        this.navigation.navigate('Detail', product);
    }
    refreshFlatlist(history){
        console.log(history)
        this.setState(this.state.data=history)
    }
    render(){
        const Item= ({product})=>{
            return(
                <SafeAreaView>
                    <TouchableOpacity>
                        <View style = {style.Item}>
                            <View>  
                                <View style ={{marginHorizontal:10,flexDirection:'row', marginTop: 7,}}>
                                    <Image source ={require("../assets/icon/check-mark.png")}
                                        style ={{width:15, height:15,marginTop:4,}}/>
                                    <Text style ={{fontSize:16,
                                        color:'#696969',
                                        marginHorizontal:5,
                                        flexDirection:'row',}}>{product.status}
                                    </Text>
                                    <Text style ={{color:'#696969',fontSize:16,}}>
                                        {product.Date} 
                                    </Text>     
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style ={{height:130}}>
                                        <Image
                                            style ={{flex:1,resizeMode:'contain',height:100,width:80, marginHorizontal:10,}}
                                            source ={{uri:product.img}}/>
                                    </View>
                                    <View style={{marginHorizontal:10,}}>
                                        <Text style ={{marginTop:10,fontSize: 20,fontWeight:'bold'}}>
                                            {product.name}
                                        </Text>
                                        <Text style ={{color:'#696969',fontSize:18,marginTop:50}}>
                                            {product.price} đ x 1 sản phẩm 
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.gotoDetail("Detail",product)}>
                        <View style={style.btnSeondary}>
                            <Text style={{fontWeight:'bold',fontSize:20, color:'#fff'}}>
                                Mua lại
                            </Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            );
        };

        return(
            <SafeAreaView style ={{flex: 1, backgroundColor: "#fff"}}>
                <View style ={style.header}>
                    <TouchableOpacity onPress ={()=> this.navigation.navigate('Home')}>
                        <View style={style.btnPrimary}>
                        <Image source ={require("../assets/icon/back.png")}
                            style ={{width:20, height:20}}
                                />
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:20,marginTop:10,left:5}}>
                        Đơn hàng của tôi
                        </Text>
                    </View>       
                </View>
                <FlatList
                    data ={this.state.data}
                    renderItem={({item})=><Item product={item}/>}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    marginTop:10,
                    paddingBottom:80,
                    backgroundColor: "#f0f8ff",
                    }}
                />
            </SafeAreaView>
        )
    }
};

const  style = StyleSheet.create({
    header:{
        height:50,
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor:'#fff',
        borderBottomWidth: 0.2,

    },
    btnPrimary:{
        marginTop:12,
        height:25,
        justifyContent:'center',
        alignItems:'center',
    },
    Item:{
        width:415,
        backgroundColor:'#fff',
        flexDirection: 'row',
        borderWidth: 0.5,
    },
    btnSeondary:{
        height:50,
        width:'100%',
        flex:1,
        backgroundColor:'#e51f28',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth: 1,
        
    }
})