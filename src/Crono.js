import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      segundos: 0,
      minutos:0,
      hora: 0,
      stop: false,
      nameStop: "Stop",
      name: "Cronometro", 
      nameRelogio:"Relógio",
      nameParcial: "Parcial do Cronometro",
      parcial: "",
      relogio: ""
    };
  }

   zerarCronometro() {
      this.state.segundos = -1
      this.state.minutos = 0
      this.state.hora = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.hora +":"+ this.state.minutos+ ":"+ this.state.segundos + "☑" + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  parci(){
    if(this.state.parcial < this.parcial() && this.parcial() > this.state.parcial){
      document.write()
    }
  }

  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }
  
  incrementar () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 60 ){
            this.zerar();
            this.incrementarMinuto(state);
          }
          if(state.minutos === 60){
            this.incrementarHora(state);
            this.zerar(state);
          }
          return({segundos: state.segundos +1})
         })
    }
  }
  
  incrementarMinuto (state) {
    this.setState(() => { 
      return {minutos: state.minutos +1}
    })
  };
  
  incrementarHora(state){
    this.setState(() =>{
     return {hora: state.hora +1}
    })
  };

  zerar () {
    this.setState({ 
      segundos: 0,
      minutos: 0
    })
  }

  componentDidMount(){
    this.timer = setInterval( () => this.incrementar(), 1000)
  }

  
  render(){

    return (
      <div> 
        <LabelRelogio name={this.state.name} />
        <Contador hora={this.state.hora} minutos={this.state.minutos} segundos={this.state.segundos} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelRelogio name={this.state.nameParcial} />
        <LabelRelogio name={this.state.parcial} />
      </div>
    );
  }
}

export default App;
