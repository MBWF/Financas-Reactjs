import React from 'react'
import './App.css'

import Totals from './components/totals/total'
import Label from './components/labelHistory/labelHistory'

function App() {
    return (
        <>
            <div className='header-background'>
                <h1>Minhas Finanças</h1>
            </div>
            <Totals/>            
            <Label/>
            <Label/>
            <Label/>
        </>
    )
    
}

export default App