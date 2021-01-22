import React from 'react'
import './total.css'

export default function Totals({title, valor}) {
    return (
        <>
            <div id='movimentacoes'>
                <div className='registros'>
                    <p>{title}</p>
                    <h1>R${valor}</h1>
                </div>
            </div>
        </>
    )
}