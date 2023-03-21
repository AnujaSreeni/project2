import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    var [submitted, setSubmitted] = useState(false);
    var [Inputname, setInputname] = useState({
        fname: ""
    })
    var [Validation, setValidation] = useState({
        fname: ""
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInputname({ ...Inputname, [name]: value })
    }
    const checkValidation = () => {
        let errors = Validation;
        if (!Inputname.fname.trim()) {
            errors.fname = "First name is required";
        }
        else {
            errors.fname = "";
        }
        setValidation(errors);
    }
    useEffect(() => {
        checkValidation();
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div>
            <form
                id="registrationForm"
                onSubmit={handleSubmit}
            >
                <TextField label='First Name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler} />
                <br></br>
                {(Validation.fname && submitted) && <p>{Validation.fname}</p>}
                <br></br>
                <br></br>
                <Button type='submit' variant='contained' color='secondary'>Save</Button>
            </form >
        </div>
    )
}

export default Validation
