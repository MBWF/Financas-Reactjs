import React, { useState } from 'react'
import './App.css'

import Totals from './components/totals/total'
import Label from './components/labelHistory/labelHistory'

function App() {

    

    const [transacoes, setTransacoes] = useState([{
        titulo: 'Salário',
        dinheiro: 1520.00,
        descricao: 'Venda',
        data: Date.now()
    }])

    function sendInfo() {
        const registros = {
            titulo: document.getElementById('titulo').value,
            dinheiro: document.getElementById('dinheiro').value,
            descricao: document.getElementById('descricao').value,
            data: document.getElementById('data').value
        }
        
        
        console.log(registros)
        setTransacoes([...transacoes, registros])
    }

    return (
        <>
            <div className='header-background'>
                <h1>Minhas Finanças</h1>
            </div>

            <Totals/>

            {transacoes.map(label => <Label key={label} title={transacoes.titulo} money={transacoes.dinheiro} description={transacoes.descricao} dateMoney={transacoes.data} />)}

            
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