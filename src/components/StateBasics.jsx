import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname] = useState("Anu")
    const changeName =()=>{
        setfname("Deepu")
    }
  return (
    <div>
      <Typography>Wecome {fname}</Typography>
      <br>
      </br>
      <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics
