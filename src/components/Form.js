import React from 'react'
import { useState } from 'react'

function Form() {
    const [Value, setValue] = useState(0)
    let increament = () => {
        if (Value < 10) {
            setValue(Value + 1)
        }
    }
    let decrement = () => {
        if (Value > 0) {
            setValue(Value - 1)
        }
    }
    return (
        <center style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: '10px'
        }}>

            <button style={{
                background: 'red',
                border: 'none',
                width: '40px',
                height: '40px',
                marginTop: '10px'
            }} onClick={decrement}>-</button>
            <p>{Value}</p>
            <button style={{
                background: 'blue',
                border: 'none',
                width: '40px',
                height: '40px',
                marginTop: '10px'
            }} onClick={increament} >+</button>

        </center>
    )
}

export default Form