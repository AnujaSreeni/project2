import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const State = () => {
    var [page,setpage] = useState("")
    const homename = ()=>{
        setpage("Home Page")
    }
    const galleryname = ()=>{
        setpage("Gallery Page")
    }
    const conatctname = ()=>{
        setpage("Contact Page")
    }
  return (
    <div>
      <Button variant='contained' color='primary' onClick={homename}>HOME PAGE</Button>
      <Button variant='contained' color='secondary' onClick={galleryname}>GALLERY PAGE</Button>
      <Button variant='contained' color='success' onClick={conatctname}>CONTACT PAGE</Button>
      <Typography>Welcome to {page}</Typography>
    </div>
  )
}

export default State
