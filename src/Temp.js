import React, { Component } from 'react'
import './App.css'

export default class Temp extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            name: 'Temporizador',
            horas : 0,
            minutos: 0,
            segundos: 0,
            stop: true,
            nameStop: "INICIE"
        }        
    }

    decrementarMinuto(state) 
    {
      this.setState(() => { 
        return {
          minutos: state.minutos - 1 
        }
      })
    }

    decrementarHora(state) 
    {
      this.setState(() => { 
        return {
          horas: state.horas - 1 
        }
      })
    }

    menorZero()
    {
        alert('INSIRA UM VALOR MAIOR QUE ZERO!')
        this.setState({
            stop: true
        })
    }

    fimTime()
    {
        alert('O TEMPO ESTIMADO ESGOTOU')
        this.setState({
            stop: true
        })
    }

    iniciar()
    {
        if (this.state.stop === false){
            this.setState(function (state, props) {

                if(this.state.horas < 0 || this.state.minutos < 0 || this.state.segundos < 0)
                {
                    return (
                        this.menorZero()
                    )
                }

                if(this.state.horas === 0 && this.state.minutos === 0 && this.state.segundos === 0) 
                {
                    return (
                        this.fimTime()
                    )
                }

                if (state.segundos == 0)
                {
                    this.setState({ 
                        segundos: 59,
                    })
                    this.decrementarMinuto(state);

                    if(state.minutos == 0)
                    {
                        this.setState({ 
                            minutos: 59,
                        })
                        this.decrementarHora(state)
                    } 
                }                     
                
                return({ 
                    segundos: state.segundos - 1
                })
                
            })
        }
    }

    
    inserirHoras = (event) => {
        this.setState({
            horas: event.target.value
        })
    }
    
    inserirMinutos = (event) => {
        this.setState({
            minutos: event.target.value
        })
    }
    
    inserirSegundos = (event) => {
        this.setState({
            segundos: event.target.value
        })
    }

    componentDidMount() 
    {
      this.timer = setInterval(() => this.iniciar(), 1000)
    }

    funcButon = (e) => {
        this.setState({
            stop: !this.state.stop
        })

        if (this.state.stop)
        {
            this.setState({ 
                nameStop: "PAUSE"
            })
        }
        else
        {
            this.setState({ 
                nameStop: "INICIE"
            })
        } 
        
        e.preventDefault()
    }

    render() {
        return (
            <div class="form-group">
                <h1>{this.state.name}</h1>
                <i>DEFINA O TEMPO ESTIMADO</i>
                <form onSubmit={this.funcButon}>
                <input class="form-control" type="number" name="horas" placeholder="HORAS" onChange={this.inserirHoras} required />
                <input class="form-control" type="number" name="minutos" placeholder="MINUTOS" onChange={this.inserirMinutos} required/>
                <input class="form-control" type="number" name="segundos" placeholder="SEGUNDOS" onChange={this.inserirSegundos} required/>
                <button class="btn btn-dark" type="submit"  >{this.state.nameStop}</button>
                <h2>{this.state.horas}h:{this.state.minutos}m:{this.state.segundos}s</h2>
                </form>
            </div>
        )   
    }
}