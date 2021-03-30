import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { render } from 'react-dom';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class App extends Component<Props>{

  constructor(props){
    super(props);
    this.state = {altura: 0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

  
  calcular() {


    let imc = this.state.massa / (this.state.altura * this.state.altura)

    let s = this.state;
    s.resultado = imc;

    if(this.state.massa != "" && this.state.altura != ""){
      if(s.resultado < 16){
        s.resultadoText = "Magreza Grave"
      }else if(s.resultado < 17){
        s.resultadoText = "Magreza Moderada"
      }else if(s.resultado < 18.5){
        s.resultadoText = "Magreza Leve"
      }else if(s.resultado < 25){
        s.resultadoText = "Saudável"
      }else if(s.resultado < 30){
        s.resultadoText = "Sobrepeso"
      }else if(s.resultado < 35){
        s.resultadoText = "Obesidade Grau I"
      }else if(s.resultado < 40){
        s.resultadoText = "Obesidade Grau II (severa)"
      }else{
        s.resultadoText = "Obesidade Grau III (mórbida)"
      }
      this.setState(s);

    }else{
      alert('Preencha os campos')
    }
    
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
          <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}>
          <Text style={styles.buttonText}>
            Calcular
          </Text>
        </TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize: 30}]}>{this.state.resultadoText}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dafcc8',
  },
  entradas:{
    flexDirection: 'row',
  },
  resultado: {
    alignSelf: 'center',
    color: '#bdbdbd',
    fontSize: 40,
    padding: 20,
    marginTop: 20
  },
  input: {
    height: 50,
    textAlign: "center",
    width: "50%",
    fontSize: 30,
    marginTop: 24,
  },
  button: {
    backgroundColor: '#bcfd99',
    borderRadius: 20,
    marginTop: 20,
    borderColor: 'green'
  },
  buttonText: {
    alignSelf: 'center',
    padding: 25,
    fontSize: 20,
    color: '#929292',
    fontWeight: 'bold'

  }
});
