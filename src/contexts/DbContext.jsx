import React, { useEffect, useState } from 'react';
import { supabase } from '../../sbs'

export const DbContext = React.createContext()

export const DbContextProvider = ( { children } ) => {
  const categories = [ 
    {
      id: 1,
      name: 'BUZOS'
    },
    {
      id: 2,
      name: 'REMERITAS-TOPS'
    },
    {
      id: 3,
      name: 'JEANS'
    },
    {
      id: 4,
      name: 'SHORT-MINIS'
    }
  ]
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [productName, setProductName] = useState('')
  const [productSize, setProductSize] = useState('')
  const [productColor, setProductColor] = useState('')
  const [productStock, setProductStock] = useState(0)
  const [productImage, setProductImage] = useState('')


  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }
  

  const logOutHandler = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.log(error)
    } else {
      setIsLogged(false)
      alert('Sesión cerrada correctamente')
    }
  }

  const userLog = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email:userName, 
      password:password
    })

    if (error) {
      console.log(error)
      alert('Verifique los datos ingresados')
    } else {
      setIsLogged(true)
    }
  }
  

  const onSubmitHandler = (ev) => {
    userLog()
    ev.preventDefault()
  }
  


  return (
    <DbContext.Provider value={
      {
        passwordHandler,
        userNameHandler,
        onSubmitHandler,
        logOutHandler,
        isLogged,
        categories
      }
    }>
      {children}
    </DbContext.Provider>
  )
}