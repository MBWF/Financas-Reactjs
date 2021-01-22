import React, { useState } from 'react'
import './App.css'

import Totals from './components/totals/total'
import Label from './components/labelHistory/labelHistory'

function App() {

    const [transacoes, setTransacoes] = useState([])
 
    const [entrada, setEntrada] = useState(0)

    // var i
    // for(i = 0; i < 2 ; i++) {
    //     console.log(i)
    //     setEntrada(entrada + transacoes[i].dinheiro)
        
    // }

    function sendInfo() {
        const registros = {
            titulo: document.getElementById('titulo').value,
            dinheiro: document.getElementById('dinheiro').value,
            descricao: document.getElementById('descricao').value,
            data: document.getElementById('data').value
        }

        
        
        console.log(registros)
        setTransacoes([...transacoes, registros])

        document.getElementById('titulo').value=''
        document.getElementById('dinheiro').value=''
        document.getElementById('descricao').value='',
        document.getElementById('data').value=''
    }

    return (
        <>
            <div className='header-background'>
                <h1>Minhas Finanças</h1>
            </div>
            <div className='total-saldo'>
                <Totals title='entrada' valor={entrada}/>
                <Totals title='Saída' valor='800'/>
                <Totals title='Saldo' valor='400' className='saldo'/>
            </div>
            {transacoes.map(label => <Label key={label} title={label.titulo} money={label.dinheiro} description={label.descricao} dateMoney={label.data} />)}

            
            <div id='cadastrar'>
                <input placeholder='Nome' name='titulo' id='titulo' />
                <input placeholder='Dinheiro' name='dinheiro' id='dinheiro' />
                <input placeholder='Descrição' name='descricao' id='descricao' />
                <input placeholder='Data' name='data' id='data' /><br/>

                <button type='submit' onClick={sendInfo}>Adicionar Transação</button>
            </div>

        </>
    )
    
}

export default App