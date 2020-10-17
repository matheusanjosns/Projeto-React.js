import React from 'react' 
import LabelRelogio from './LabelRelogio'
import './App.css'


        class Relogio extends React.Component{
            constructor(props){
            super(props)
            this.state = {
                nameRelogio:"Relogio Local",
                relogio:"",
                newyork:"",
                moscow:"",
                london:"",
                maputo:"",
                hongkong:""

            }

            }

        relogio()
        {
            
            var moment = require('moment-timezone')
            let localTime = moment( ).tz("Brazil/Brasilia").format('HH:mm:ss').toString()
            let newyork = moment( ).tz("America/New_York").format('HH:mm:ss').toString()
            let moscow = moment( ).tz("Europe/Moscow").format('HH:mm:ss').toString() 
            let london = moment( ).tz("Europe/London").format('HH:mm:ss').toString()
            let maputo = moment( ).tz("Africa/Maputo").format('HH:mm:ss').toString() 
            let hongkong = moment( ).tz("Asia/Hong_Kong").format('HH:mm:ss').toString()
            this.setState({
                relogio: localTime,
                newyork: newyork,
                moscow: moscow,
                london:london,
                maputo:maputo,
                hongkong:hongkong
            })
        }

        componentDidMount()
        {
            this.timer = setInterval( () => this.relogio(), 1000)
        
        }

                render()
                {
                    return(
                    <div>
                        <LabelRelogio name={this.state.nameRelogio} />
                        <LabelRelogio name={this.state.relogio}/>  
                        <hr/>
                        <div id="ny">
                         <h2>Relogio NEW YORK</h2> 
                         <LabelRelogio name={this.state.newyork}/>
                        </div>
                        
                        <div id="mw">
                         <h2>Relogio Moscow</h2>
                         <LabelRelogio name={this.state.moscow}/>
                        </div>
                           
                        <div id="ln">                        
                         <h2>Relogio London</h2>
                         <LabelRelogio name={this.state.london}/>
                        </div>
                        
                        <div >
                         <h2>Relogio Maputo</h2>
                         <LabelRelogio name={this.state.maputo}/>
                        </div>

                        <div>  
                         <h2>Relogio HongKong</h2>
                         <LabelRelogio name={this.state.hongkong}/>
                        </div>
        
                        </div>
                )
            }
        }
        export default Relogio