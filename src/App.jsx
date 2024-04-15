import { useEffect, useState } from 'react'
import './App.css'
import Api from './components/api';
function App() {
  const [palabra, setPalabra] = useState([])
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleAgregarPalabra = () => {
    if (inputValue.trim() !== '') {
      setPalabra([...palabra, inputValue]);
      setInputValue('');
    }
  }
  return (
    <>
    <Api/>
      <div>
        <input type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Agrega la siguiente palabra' />
          <button onClick={handleAgregarPalabra}>Agregar</button>
      </div>
      <div style={{display:'flex',
    justifyContent:'space-evenly',
    flexDirection:'column',
    height:'100%'}}>
        {palabra.map((word, index) => (
          <li key={index}>
            {word}
          </li>
        ))}
      </div>
    </>
  )
}

export default App
