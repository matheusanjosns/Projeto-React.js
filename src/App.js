  import React from 'react'
  import Crono from './Crono'
  import Relogio from './Relogio'
  import Temp from './Temp'
  import './App.css'

  class App extends  React.Component{
      render(){
        return(
          <div>
            <div>
              <Relogio/>
            </div>

            <hr/>

            <div>
              <Crono/>
            </div>
            
            <hr/>
            
            <div>
              <Temp/>
            </div>
          </div>
        );
      }
  }

  export default App;
