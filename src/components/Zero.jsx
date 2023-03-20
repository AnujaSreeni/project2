import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Zero = () => {
  var [cnt,setcnt] = useState(0);
   const increment =()=>{
       setcnt(++cnt)
   }
   const decrement =()=>{
    setcnt(--cnt)
   }
  return (
    <div>
      <Typography variant='h1'>{cnt}</Typography>
      <br>
      </br>
      <Button variant='contained'onClick={decrement}>-</Button>
      <br>
      </br>
      <br>
      </br>
      <Button variant='contained'onClick={increment}>+</Button>
    </div>
  )
}

export default Zero
