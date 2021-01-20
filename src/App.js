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
            titulo: document.getElementsByName('titulo').value,
            dinheiro: document.getElementsByName('dinheiro').value,
            descricao: document.getElementsByName('descricao').value,
            data: document.getElementsByName('data').value
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
                <input placeholder='Nome' name='titulo'/>
                <input placeholder='Dinheiro' name='dinheiro'/>
                <input placeholder='Descrição' name='descricao' />
                <input placeholder='Data' name='data' /><br/>

                <button type='submit' onClick={sendInfo}>Adicionar Transação</button>
            </div>

        </>
    )
    
}

export default App