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
  const [productColor, setProductColor] = useState([])
  const [productColor1, setProductColor1] = useState('')
  const [productColor2, setProductColor2] = useState('')
  const [productColor3, setProductColor3] = useState('')
  const [productColor4, setProductColor4] = useState('')
  const [productColor5, setProductColor5] = useState('')
  const [productStock, setProductStock] = useState(0)
  const [productImage, setProductImage] = useState([])

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
  const onSubmitHandler = (e) => {
    userLog()
    e.preventDefault()
  } // Inicio de sesión

  const productNameHandler = (e) => {
    setProductName(e.target.value)
  }
  const productSizeHandler = (e) => {
    setProductSize(e.target.value)
  }
  const productColor1Handler = (e) => {
    setProductColor1(e.target.value)
  }
  const productColor2Handler = (e) => {
    setProductColor2(e.target.value)
  }
  const productColor3Handler = (e) => {
    setProductColor3(e.target.value)
  }
  const productColor4Handler = (e) => {
    setProductColor4(e.target.value)
  }
  const productColor5Handler = (e) => {
    setProductColor5(e.target.value)
  }
  const productColorHandler = () => {
    if (productColor1 !== '') {
      setProductColor([
        {
          color1: productColor1
        }
      ])
    } else if (productColor1 !== '' && productColor2 !== '') {
      setProductColor([
        {
          color1: productColor1
        },
        {
          color2: productColor2
        }
      ])
    } else if (productColor1 !== '' && productColor2 !== '' && productColor3 !== '') {
      setProductColor([
        {
          color1: productColor1
        },
        {
          color2: productColor2
        },
        {
          color3: productColor3
        }
      ])
    } else if (productColor1 !== '' && productColor2 !== '' && productColor3 !== '' && productColor4 !== '') {
      setProductColor([
        {
          color1: productColor1
        },
        {
          color2: productColor2
        },
        {
          color3: productColor3
        },
        {
          color4: productColor4
        }
      ])
    } else if (productColor1 !== '' && productColor2 !== '' && productColor3 !== '' && productColor4 !== '' && productColor5 !== '') {
      setProductColor([
        {
          color1: productColor1
        },
        {
          color2: productColor2
        },
        {
          color3: productColor3
        },
        {
          color4: productColor4
        },
        {
          color5: productColor5
        }
      ])
    } else {
      setProductColor([])
    }
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