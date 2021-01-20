import React from 'react'
import './total.css'

export default function Totals() {
    return (
        <>
            <div id='movimentacoes'>
                <div className='registros'>
                    <p>Entrada</p>
                    
                    <h1>R$ 192584,25</h1>
                </div>
                <div className='registros'>
                    <p>Saída</p>
                    <h1>R$ 58319,00</h1>
                </div>
                <div className='registros'>
                    <p>Saldo</p>
                    <h1>R$ 23456,90</h1>
                </div>
            </div>
        </>
    )
}