import { useState } from "react";
import Perfil  from "./components/Perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario";

  function App(){
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
    const [nomeUsuario, setNomeUsuario] = useState('')
    return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>

    {nomeUsuario.length >4 &&(
      <>
      <Perfil nomeUsuario={nomeUsuario}></Perfil>
      <ReposList nomeUsuario={nomeUsuario}></ReposList>
      </>
    )}

    {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    
    </>
    )
}

export default App
