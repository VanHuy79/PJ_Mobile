import React, { Component } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { View, SafeAreaView, Image, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SecondButton } from '../Component/button';
const data = require('../consts/cart.json')

export default class DetailScreen extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.gotoCart = this.gotoCart.bind(this)
        this.add2cart = this.add2cart.bind(this)
        this.state = {
            data: props.route.params

        }
        console.log(this.state.data)
    }
    gotoCart(product){
        console.log(product);
        this.navigation.navigate('Cart',product);
    }
    add2cart(){
        data.carts.push({tongdon: this.state.data.price, soluong: 1, name: this.state.data.name, img: this.state.data.img, price: this.state.data.price});
        console.log(data.carts);
        this.navigation.navigate('Cart')
    }
    render(){
        return(
        <ScrollView>
            <SafeAreaView style ={{backgroundColor: 'white'}}>
                <View style ={style.header}>
                    <View style ={style.back}>
                        <TouchableOpacity onPress = {()=> this.navigation.navigate("Home")}>
                            <Image source ={require('../assets/icon/back.png')} style ={{width:20, height:20, marginTop:15}}/>
                        </TouchableOpacity>
                        <Text style ={{fontSize:21, fontWeight:'bold', marginTop:10 }}> Chi tiết sản phẩm</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>this.navigation.navigate('Cart')}>
                            <Image source = {require('../assets/icon/shopping-cart.png')}
                            style ={{height:30, width:30, marginRight:25}}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style ={style.imgCon}>
                    <Image source ={{uri:this.state.data.img}}
                    style ={{resizeMode:'contain', flex:1,height:300,width:300,borderRadius:20}}/>
                </View>

                <View style ={style.detail}>
                    <View style ={{flexDirection:'column', justifyContent: 'space-between'}}>
                        <Text style ={{fontSize:25,fontWeight: 'bold', color: 'white'}}>
                            {this.state.data.name}
                        </Text>
                        <View style ={style.price}>
                            <Text style = {{color:'white',fontWeight:'bold',fontSize: 24,marginTop: 12,}}>
                                {this.state.data.price} đ
                            </Text>
                        </View>
                    </View>

                    <View style ={{ marginTop:10}}>
                        <Text style ={{fontSize:20, fontWeight:'bold',color:'white'}}>
                            {this.state.data.about}
                        </Text>
                    </View>

                    <View style ={{ marginTop:10}}>
                        <Text style ={{fontSize:20, fontWeight:'bold',color:'white'}}>
                            Thương hiệu: {this.state.data.trademark}
                        </Text>
                    </View>

                    <View style ={{ marginTop:10}}>
                        <Text style ={{fontSize:20, fontWeight:'bold',color:'white'}}>
                            Free ship với đơn hàng lớn hơn 200k
                        </Text>
                        <Text style ={{fontSize:20, fontWeight:'bold',color:'#48dbfb'}}>
                            (Chính sách vận chuyển)
                        </Text>
                    </View>

                    <View style ={{marginTop:40, marginBottom:40, alignItems:'center'}}>
                        <SecondButton title ="Đặt Mua Ngay" onPress={()=>this.add2cart()}/>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    back:{
        width:200,
        height:50,
        flexDirection: 'row',

    },
    imgCon:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    detail:{
        marginTop: 35,
        paddingHorizontal:20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor:"#e51f28",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
})