import "./App.css";
import Card from "./Components/Card";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    nombre: "",
    comida: "",
    postre: ""
  });
  const [error, setError] = useState(false); 
  const [show, setShow] = useState(false); 

  const submitHandler = (e) => {
    e.preventDefault()
    if (user.nombre.trimStart().length >=3 && 
        user.comida.trim().length >=6 && 
        user.postre.trim().length>=3){
      setError(false);
      setShow(true);
    }else{
      setError(true);
      setShow(false);
    }
  }

  const handleReset = (e) => {
    e.preventDefault();
    setUser({
      nombre: "",
      comida: "",
      postre: ""
    })
    setError(false);
    setShow(false);
  }



  return (
    <div className="App">
      <h1>Completa los datos</h1>
      <form onSubmit={submitHandler} style={{display:"flex", flexDirection:"column", gap:"15px"}}>
        <div>
        <label> Ingresa tu nombre:
        <input type="text" value={user.nombre} onChange={ (e) => setUser({...user, nombre: e.target.value}) } style={{marginLeft:"15px"}}/>
        </label></div>
        <div>
        <label> Ingresa tu comida favorita:
        <input type="text" value={user.comida} onChange={ (e) => setUser({...user, comida: e.target.value}) } style={{marginLeft:"15px"}}/>
        </label></div>
        <div>
        <label> Ingresa tu postre favorito:
        <input type="text" value={user.postre} onChange={ (e) => setUser({...user, postre: e.target.value}) } style={{marginLeft:"15px"}}/>
        </label></div>
        <div>
         <button style={{backgroundColor:"#3ed2a9", margin:"0 10px"}}>Enviar</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
      {show && <Card user={user}/>}
      {error && (
        <p style={{color:"red", fontWeight:"bold"}}>Por favor chequea que la información sea correcta</p>
      )}
    </div>
  );
}

export default App;
