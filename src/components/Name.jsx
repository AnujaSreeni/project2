import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [fname,setname] = useState("")
    const changeName = (event) => {
        const{name,value} = event.target;
        setname(value);
    }
    useEffect(()=>{
        setname("[Enter Name]")
    },[])
  return (
    <div>
      <Typography variant='h2'>My Name is {fname}</Typography>
      <br>
      </br>
      <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={(e)=> changeName(e)}/>
    </div>
      )
}

export default Name
