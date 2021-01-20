import React from 'react'

import './labelHistory.css'

export default function Label({title, money, description, dateMoney}) {
    return (
        <>
        <div id='engloba'>
            <div id='main'>
                <div className='name-event'>
                    <p>{title}</p>
                </div>

                <div className='details'>
                    <ul>
                        <li>R${money}</li>
                        <li>{description}</li>
                        <li>{dateMoney}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}