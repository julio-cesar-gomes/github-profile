import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('');

    useEffect(()=>{
        console.log('o componente mudou');
        
        return() => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(()=>{
        //quando tiver alteracao no campo 
        console.log('o campo nome mudou')
    }, [nome])

    useEffect(()=>{
        //quando tiver alteracao no campo 
        console.log('o campo Materia A mudou')
    }, [materiaA])

    const alteraNome = (evento) => {
        
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return (
                <p>
                    {nome}, Voce foi aprovado
                </p>
            )
        } else {
            return (<p>
                {nome}, Voce nao foi aprovado
            </p>
            )
        }
    }

    return(
        <form>
            <ul>
            {[1,2,3,4,5].map(item => <li key={item}>{item}</li>)}
            </ul>
            <input type="text" placeholder="seu nome" onChange={alteraNome} />
            <input type="number" max={10} min={0} placeholder="Nota materia A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" max={10} min={0} placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" max={10} min={0} placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario