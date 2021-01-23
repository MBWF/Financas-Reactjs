import React, { useEffect, useState} from 'react'
import './App.css'

import Totals from './components/totals/total'
import Label from './components/labelHistory/labelHistory'

function App() {

    const [transacoes, setTransacoes] = useState([])

    const [titulo, setTitulo] = useState('')
    const [dinheiro, setDinheiro] = useState(0)
    const [descricao, setDescricao] = useState('')
    const [data, setData] = useState('')

    const [entrada, setEntrada] = useState(0)
    const [saida, setSaida] = useState(0)
    const [saldo, setSaldo] = useState(0)

    useEffect(
        () => {
            setEntrada(
                transacoes
                    .filter(transacao => transacao.descricao == "entrada")
                    .map(transacao => transacao.dinheiro)
                    .reduce((total, current) => total + current, 0)
                )
            setSaida(
                transacoes
                .filter(transacao => transacao.descricao == "saida")
                .map(transacao => transacao.dinheiro)
                .reduce((total, current) => total + current, 0)
            )
            setSaldo(entrada - saida)
        }, [transacoes, entrada, saida]
    )
    
    function somaEntradas(transacoes) {
        let valores = 0
        for (transacao in transacoes) {
            valores += transacao.dinheiro
        }
        setEntrada(valores)
    }

    function sendInfo() {
        const registros = {
            titulo,
            dinheiro,
            descricao,
            data
        }
        
        console.log(registros)
        const aux = [...transacoes, registros]
        setTransacoes(aux)
    }


    const onChangeDinheiro = e => {
        if(e.target.value) {
            setDinheiro(parseFloat(e.target.value))
        }
    }



    return (
        <>
            <div className='header-background'>
                <h1>Minhas Finanças</h1>
            </div>
            <div className='total-saldo'>
                <Totals title='entrada' valor={entrada}/>
                <Totals title='Saída' valor={saida}/>
                <Totals title='Saldo' valor={saldo} className='saldo'/>
            </div>
            {transacoes.map(label => <Label key={`${Math.random()}`} title={label.titulo} money={label.dinheiro} description={label.descricao} dateMoney={label.data} />)}

            
            <div id='cadastrar'>
                <input 
                    placeholder='Nome' 
                    name='titulo' 
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                />
                <input 
                    placeholder='Dinheiro'
                    name='dinheiro'
                    type="number"
                    value={dinheiro}
                    onChange={e => {
                        if(e.target.value) {
                            setDinheiro(parseFloat(e.target.value))
                        }
                    }}
                />
                <input
                    placeholder='Descrição'
                    name='descricao'
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />
                <input
                    placeholder='Data'
                    name='data'
                    value={data}
                    onChange={e => setData(e.target.value)}
                /><br/>

                <button type='submit' onClick={sendInfo}>Adicionar Transação</button>
            </div>

        </>
    )
    
}

export default App