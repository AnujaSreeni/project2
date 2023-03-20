import React from 'react'

function Sample() {
    var pname= ["Tiya","Midhun","Arya"]
  return (
    <div>
      <ul>
        {pname.map((value,index)=>{
            return <li key={index}>{value}</li>
        })}
      </ul>
    </div>
  )
}

export default Sample