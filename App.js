import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
export default function App() {
  return (
<View style={styles.container}>
  <View style={styles.header}>
      <Text style={{color:'white',textAlign:'center',fontWeight:'400',fontSize:18}}>Bayesian React Native Test </Text>
  </View>
      {/* <StatusBar style="auto" /> */}
     
  <View style={styles.first}>
    <View>
      <Image source = {{uri:'https://www.pngrepo.com/png/192244/180/man-user.png'}}
       style = {{ 
                 width: 60, height: 60 
                }}
      />
    </View>
    <View>
      <Text style={{color:'#006C45',fontWeight:'400',fontSize:25, textAlign:'right'}}>Sumesh T P</Text>
      <Text style={styles.pro}> Kalpetta</Text>
      <Text style={styles.pro}>Wayanad</Text>
    </View>
  </View>


  <View style={styles.sec}>
      <View>
     {/* <FontAwesome name="phone" size={60} color="blue" style={{marginLeft:15,marginTop:15}}/> */}
   
        <Image source = {{uri:'https://aroundthetablelb.com/wp-content/themes/eventra/images2018/callUs.png'}}
         style = {{
                   width: 60, height: 60 
                }}
        />
    
      </View>
      <View >
        <Text  style={{color:'white',fontWeight:'700',fontSize:20}}>TELEPHONE CALLS</Text>
        <Text style={styles.smalltxt}>Overall:75</Text>
        <Text style={styles.smalltxt}>Today:10</Text>
      </View>
  </View>


  <View style={styles.sec}>
     <View>
     {/* <FontAwesome name="whatsapp" size={60}  color="white"  style={{marginLeft:15,marginTop:10}}  /> */}
      <Image source = {{uri:'https://www.arasgrp.com/_nuxt/img/WhatsApp_Logo_2.de841f9.png'}}
       style = {{
         width: 60, height: 60 
        }}
      />
     </View>
     <View>
       <Text  style={{color:'white',fontWeight:'700',fontSize:20}}>WHATSAPP</Text>
       <Text style={styles.smalltxt}>Overall:75</Text>
       <Text style={styles.smalltxt}>Today:10</Text>
     </View>
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FFF6',
  
  },
  header:{
    backgroundColor:"#006C45",
    height:60,
    justifyContent:'center',
    marginTop:40,
    borderTopEndRadius:20,
    borderTopStartRadius:20,
     
  },
  first:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20,
    marginLeft:10,
    marginRight:10,
    },
  sec:{
    justifyContent:'space-between',
    flexDirection:'row',
    padding:20,
    backgroundColor:'#006C45',
    borderRadius:10,
    marginTop:80,
    marginLeft:10,
    marginRight:10


  },smalltxt:{
    color:'white',
    textAlign:'right'
  },
  pro:{
    color:'#006C45',
    textAlign:'right'
  }
});
