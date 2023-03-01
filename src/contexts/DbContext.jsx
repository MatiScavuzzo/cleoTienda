import React, { useEffect, useState } from 'react';
import { supabase } from '../../sbs'

export const DbContext = React.createContext()

export const DbContextProvider = ( { children } ) => {
  const sizes = [
    { id: 0, size: 'Talle único' },
    { id: 1, size: 'XS' },
    { id: 2, size: 'S' },
    { id: 3, size: 'M' },
    { id: 4, size: 'L' },
    { id: 5, size: 'XL' },
    { id: 6, size: 'XXL' },
    { id: 7, size: 34 },
    { id: 8, size: 36 },
    { id: 9, size: 38 },
    { id: 10, size: 40 },
    { id: 11, size: 42 },
    { id: 12, size: 44 },
    { id: 13, size: 46 },
    { id: 14, size: 48 },
    { id: 15, size: 50 },
    { id: 16, size: 52 },
    { id: 17, size: 54 },
    { id: 18, size: 56 }
  ]
  
  const categories = [ 
    { id: 0, name: 'BUZOS'},
    { id: 1, name: 'REMERITAS-TOPS'},
    { id: 2, name: 'JEANS'},
    { id: 3, name: 'SHORT-MINIS'}
  ]
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)
  const [productName, setProductName] = useState('')
  const [sizeCheckedList, setSizeCheckedList] = useState([])
  const [productColor, setProductColor] = useState([])
  const [productColor1, setProductColor1] = useState('')
  const [productColor2, setProductColor2] = useState('')
  const [productColor3, setProductColor3] = useState('')
  const [productColor4, setProductColor4] = useState('')
  const [productColor5, setProductColor5] = useState('')
  const [productStock, setProductStock] = useState(0)
  const [productDescription, setProductDescription] = useState('')
  const [productImages, setProductImages] = useState([])
  const [previewCard, setPreviewCard] = useState(false)
  const [reloadPreview, setReloadPreview] = useState(0)

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
    const sizeValue = e.target.value
    const isChecked = e.target.checked
    const filteredList = sizeCheckedList.filter(size => size !== sizeValue)
    isChecked ? setSizeCheckedList([...sizeCheckedList, sizeValue]) : setSizeCheckedList(filteredList)
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
  
  useEffect(() => {
    const colors = [productColor1, productColor2, productColor3, productColor4, productColor5]
    const filteredColors = colors.filter(color => color !== '')
    setProductColor((prevColors) => {
      if (prevColors.length === filteredColors.length && prevColors.every((color, index) => color === filteredColors[index])) {
        return prevColors
      } else {
        return filteredColors
      }
    })
  }, [productColor1, productColor2, productColor3, productColor4, productColor5, setProductColor])

  const productStockHandler = (e) => {
    setProductStock(e.target.value)
  }

  const productDescriptionHandler = (e) => {
    setProductDescription(e.target.value)
  }

  const productImagesHandler = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setProductImages((prevImages) => [...prevImages, ...selectedFiles])
  }

  const previewHandler = () => {
    setPreviewCard(true)
  }

  const reloadPreviewHandler = () => {
    setReloadPreview(reloadPreview+1)
  }

  useEffect(() => {
    setPreviewCard(true)
  }, [reloadPreview])

  return (
    <DbContext.Provider value={
      {
        passwordHandler,
        userNameHandler,
        onSubmitHandler,
        logOutHandler,
        productNameHandler,
        productSizeHandler,
        productColor1Handler,
        productColor2Handler,
        productColor3Handler,
        productColor4Handler,
        productColor5Handler,
        productStockHandler,
        productDescriptionHandler,
        productImagesHandler,
        previewHandler,
        reloadPreviewHandler,
        isLogged,
        sizes,
        categories,
        productName,
        sizeCheckedList,
        productColor,
        productStock,
        productDescription,
        productImages,
        previewCard
      }
    }>
      {children}
    </DbContext.Provider>
  )
}