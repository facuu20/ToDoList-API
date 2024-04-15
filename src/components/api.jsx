import React, { useEffect, useState } from 'react'

const api = () => {

const [foto, setFoto]=useState(null);

useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data =>{setFoto(data)})
},[])


  return (
    <div>
         {foto ? (
        <img src={foto.message} alt="Ejemplo" />
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  )
}

export default api
