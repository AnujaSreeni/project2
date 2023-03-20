import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const TableA = () => {
    var pname =[{name:"Tiya",age:10,place:"Koratty"},
    {name:"Meera",age:15,place:"TVM"},
    {name:"Rahul",age:20,place:"Pala"}]
  return (
   <TableContainer>
    <Table>
       <TableHead>
           <TableRow>
               <TableCell>Name</TableCell>
               <TableCell>Age</TableCell>
               <TableCell>Place</TableCell>
            </TableRow>
        </TableHead> 
        <TableBody>
            {pname.map((value,index)=>{return <TableRow>
                <TableCell key={index}>{value.name}</TableCell>
                <TableCell key={index}>{value.age}</TableCell>
                <TableCell key={index}>{value.place}</TableCell>
            </TableRow>})}
        </TableBody>
    </Table>
   </TableContainer>
    
  )
}

export default TableA
