import './App.css';
import { useState } from 'react';
function App() {

  const [contador, setContador] = useState(0)

  
  function incrementar(){
    setContador(contador + 1 )
  }
  return (
    <div className="App">
      <p>contador {contador}</p>
      <button 
        onClick={incrementar}
      
      >Incrementar</button>
    </div>
    
  )

  }
    
 
  
export default App;

