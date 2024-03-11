import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from './Components/HolaMundo';
import Hello from './Components/OnClick';
import Input from './Components/Input';



function App() {
  const [count, setCount] = useState(0)
  const mensaje = 'Hola Mundo!';

  const handleChangeHelloEvent = () => {
    console.log('Estado cambiado ');
  };
  const [entrada, setEntrada] = useState('holaaaa');
  //entrada es el valor
  //setEntrada la función que modifica el estado

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <br/><br/>
    <div>--------- Ejercicio Hola mundo ------------</div>
      <div>
      <h1>{mensaje}</h1>
      <Component nombre="Isa" mensaje={mensaje} />
    </div>
    <br/><br/>
    <div>--------- Ejercicio OnChange ------------</div>
    <div>
      <Hello onChange={handleChangeHelloEvent} />
      <p>Start editing to see some magic happen :)</p>

      <Input input={entrada} setInput={setEntrada} />
    </div>
    </>
  )
}

export default App
