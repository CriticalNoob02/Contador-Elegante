import React, {useState} from "react"
import {View, Text, Image, StyleSheet, Button} from "react-native"

export default () => {
  
  const [contador, setContador] = useState (0)
  
  return (
    <View style={ Estilo.container }>
      <View style={ Estilo.containerlogo }>
        <Image source={require("./assets/logo-contador.png")} style={Estilo.img} />
      </View>

      <Text style={ Estilo.texto }>
        {contador}
      </Text>

      <Button title="+" color="#36AE7C"
      onPress={ () => {setContador(contador +1 )}}/>
      <Button title="-" color="#EB5353"
      onPress={ () => {setContador(contador -1 )}}
      disabled={ contador > 0 ? false : true}/>
    </View>
  )
}

const Estilo = StyleSheet.create(
  {
    img: {
      width: 150,
      height: 150,
    },
    container: {
      flexGrow: 1,
      backgroundColor: "#1F1F1F",
    },
    containerlogo: {
      alignItems: "center",
    },
    texto: {
      textAlign: "center",
      fontSize: 80,
      color: "#F1F1F1"
    }
  }
)