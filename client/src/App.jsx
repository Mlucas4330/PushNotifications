import { useEffect } from 'react'
import { registerServiceWorker } from './utils'

function App() {
    return (
        <>
            <label htmlFor='hotmart'>Hotmart</label>
            <input type='radio' name='' id='hotmart' />
            <input type='radio' name='' id='' />
            <input type='radio' name='' id='' />
            <input type='radio' name='' id='' />
            <input type='radio' name='' id='' />
            <input placeholder='título' type='text' />
            <input placeholder='mensagem' type='text' />
            <input type='number' />
            <button onClick={() => registerServiceWorker()}>enviar</button>
        </>
    )
}

export default App

