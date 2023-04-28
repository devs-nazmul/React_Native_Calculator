import {SafeAreaView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useState} from "react";

export default function App(){

    const [result, setResult] = useState('')
    let [math, setMath] = useState('')
    const [braket, setBraket] = useState(true)
    const [alert, setAlert] = useState('')
    const [mode, setMode] = useState(true)

    const color = {
        background: mode? '#181b2f' : '#f3f3f3',
        colorText: mode? '#a4b4c9' : '#292d41',

    }

    function handleAC(){
        setMath('')
        setResult('')
    }

    function handleBraket(){

        const brakets = braket? '(' : ')'

        if ( math[math.length - 1] == '+' || math[math.length - 1] == '-' || math[math.length - 1] == '*' || math[math.length - 1] == '/'){

            if (math.lastIndexOf("(") < 1){
                setMath(math += '(')
            } else {
                setMath(math += '(')
            }
        }

        if (math.lastIndexOf("(") > 1){

            if ( Number.isInteger(parseInt(math[math.length - 1])) ){

                if (math.lastIndexOf(")") < 1){
                    setMath(math += ')')
                }
            }
        }

    }

    function handleResult(){
        try {
            if (math.length < 20){
                setResult(eval(math))
            } else {
                setAlert('Limit Reached')
                setTimeout(() => {
                    setAlert('')
                }, 3000)
            }
        } catch(e){
            setAlert(e.message)
            setTimeout(() => {
                setAlert('')
            }, 3000)
        }
    }

    return(
        <SafeAreaView style={{backgroundColor: mode? '#0d0e1f' : '#ffffff', flex:1}}>
            <StatusBar barStyle={mode? 'light-content' : 'dark-content'} backgroundColor={mode? '#0d0e1f' : '#ffffff'} />

            <View style={{flex:1, paddingHorizontal:20}}>

                <View style={{flex:1, paddingTop:30, alignItems:'center', justifyContent:'flex-start', }}>
                    <View style={{flexDirection:'row', width:120, backgroundColor: mode? '#151a2f' : '#e3e1e1' , paddingVertical:10, alignItems:'center', justifyContent:'space-evenly', borderRadius:20,   }}>
                        <TouchableOpacity onPress={() => setMode(false)}>
                            <Feather name="sun" size={22} color={mode ? '#54557c' : '#000'} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setMode(true)} >
                            <MaterialIcons name="nightlight-round" size={22} color={mode ? '#ffffff' : '#bbbbbb'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'green', paddingTop:20, fontSize:20, fontWeight:'bold'}}>{alert}</Text>
                </View>

                <View style={{justifyContent:'flex-end', flex:2, }}>
                    <View style={{alignItems:'flex-end', paddingTop:30, paddingBottom:20, justifyContent:'flex-end'}}>
                        <Text style={{color:'#7a9ba6', fontSize:25, fontWeight:'bold'}}>{math}</Text>
                    </View>

                    <View style={{alignItems:'flex-end', paddingBottom:10, justifyContent:'flex-end'}}>
                        <Text style={{color:mode? '#d7d3d3' : '#000000', fontSize:55, fontWeight:'bold',  }}>{result}</Text>
                    </View>
                </View>

                <View style={{flex:6, justifyContent:'flex-end', }}>
                    <View style={{backgroundColor: mode? '#17192d' : '#eeeeee', borderTopRightRadius:30, borderTopLeftRadius:30, marginHorizontal:-20, padding:20, marginTop:10, justifyContent:'flex-end'}}>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10}}>

                            <TouchableOpacity onPress={handleAC}  style={{backgroundColor: color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:20,  }}>AC</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleBraket}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>( )</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '%')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '/')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Feather name="divide" size={25} color={color.colorText} />
                            </TouchableOpacity>

                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10}}>

                            <TouchableOpacity onPress={() => setMath(math += '7')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>7</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '8')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>8</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '9')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>9</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '*')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Feather name="x" size={25} color={color.colorText} />
                            </TouchableOpacity>

                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10}}>

                            <TouchableOpacity onPress={() => setMath(math += '4')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>4</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '5')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>5</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '6')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>6</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '-')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Feather name="minus" size={25} color={color.colorText} />
                            </TouchableOpacity>

                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10}}>

                            <TouchableOpacity onPress={() => setMath(math += '1')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '2')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '3')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '+')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Feather name="plus" size={25} color={color.colorText} />
                            </TouchableOpacity>

                        </View>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', marginVertical:10}}>

                            <TouchableOpacity onPress={() => setMath(math.slice(0, -1)) }  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Feather name={'delete'} size={25} color={color.colorText} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += 0)}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Text style={{color:color.colorText, fontWeight:'bold', fontSize:25,  }}>0</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setMath(math += '.')}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <Entypo name={'dot-single'} size={25} color={color.colorText} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleResult}  style={{backgroundColor:color.background, borderRadius:10, height:65, width:65, alignItems:'center', justifyContent:'center' }}>
                                <MaterialCommunityIcons name="equal" size={25} color={color.colorText} />
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>


            </View>
        </SafeAreaView>
    )
}
