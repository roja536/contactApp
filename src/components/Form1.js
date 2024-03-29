import React from 'react';
import { useState } from 'react';

function Form1() {
    const [data, setData] = useState({
        uName: '',
        password: '',
    });
    const Change = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submit = () => {

    }

    return (
        <div>
            <h1>User Registration form:</h1>
            <label for='UserName'>User Name:</label><br></br>
            <input type='text' value={data?.uName} placeholder='Enter User Name' name='uName' onChange={Change} /><br></br>

            <label for='Password'>Password:</label><br></br>
            <input type='text' value={data?.password} placeholder='Enter Password' name='password' onChange={Change} /><br></br>
            <button onSubmit={submit}>Submit</button>
        </div>

    )
}

export default Form1