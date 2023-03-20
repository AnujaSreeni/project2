import { TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Forms = () => {
    var [fname,setName] = useState("")
    const changeName = (event) => {
        const{name,value} =event.target;
        setName(value);
    }
    var [lname,setname] = useState("")
        const changName= (event)=> {
            const{name,value} = event.target;
            setname(value);
        }
        useEffect(()=>{
            setName('[Enter Name]')
        },[])
     return (
    <div>
        <Typography>First Name is {fname}</Typography>
      <TextField label='First Name' variant='outlined' onChange={(e)=> changeName(e)}/>
      <br>
      </br>
      <Typography>Second Name is {lname}</Typography>
      <TextField label='Second Name' variant='outlined' onChange={(e)=> changName(e)}/>
    </div>
  )
}

export default Forms
