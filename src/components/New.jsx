import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const New = () => {
    var [Inputname, setInputname] = useState({
        fname: "",
        lname: ''
    })
    const inputHandler = (e) => {
        const {name,value} = e.target
        setInputname({ ...Inputname, [name]: value })
    }
  return (
    <div>
      <Typography>First Name is {Inputname.fname}</Typography>
      <br></br>
      <TextField label='First Name' variant='outlined' name='fname' value={inputHandler.fname} onChange={inputHandler}/>
      <br>
      </br>
    <Typography>Second Name is {Inputname.lname}</Typography>
      <TextField label='Second Name' variant='outlined' name='lname' value={inputHandler.lname} onChange={inputHandler}/>
    </div>
  )
}

export default New
