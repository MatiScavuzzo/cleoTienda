import { useContext } from 'react'
import { Button } from '../components/Button'
import { DbContext } from '../contexts/DbContext'

export const UploadForm = () => {
  const { 
    categories, 
    sizes, 
    productSizeHandler, 
    productNameHandler,
    productColor1Handler,
    productColor2Handler,
    productColor3Handler,
    productColor4Handler,
    productColor5Handler,
    productStockHandler } = useContext(DbContext)
  return (
    <div className={'w-full md:w-1/2 bg-slate-200 border-2 border-slate-400 shadow-2xl shadow-slate-600 rounded-lg'}>
      <div className='flex flex-col gap-2 p-4'>
        <label htmlFor='productName'>Nombre del producto</label>
        <input onChange={productNameHandler} className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productName' id='productName' />
        <div className='flex flex-col'>
          <p>Talles</p>
          <div className='grid grid-cols-2 gap-1 lg:grid-cols-4 p-2'>
            {sizes.map(sz => 
            <label className='flex gap-2 items-center' key={sz.id} htmlFor={sz.size}>
              <input type='checkbox' onChange={productSizeHandler} className='appearance-none bg-white border border-slate-400 rounded-full w-4 h-4 checked:bg-emerald-500 checked:border-emerald-500' name={sz.size} id={sz.size} value={sz.size} />
              <span>{sz.size}</span>
            </label>)}
          </div>
        </div>
        <label htmlFor='productColor'>Colores</label>
        <div className='grid grid-rows-1 lg:grid-cols-5 gap-2'>
          <input onChange={productColor1Handler} className='border-2 w-full border-slate-600 p-1 rounded-lg' type='text' name='productColor1' id='productColor' />
          <input onChange={productColor2Handler} className='border-2 w-full border-slate-600 p-1 rounded-lg' type='text' name='productColor2' id='productColor' />
          <input onChange={productColor3Handler} className='border-2 w-full border-slate-600 p-1 rounded-lg' type='text' name='productColor3' id='productColor' />
          <input onChange={productColor4Handler} className='border-2 w-full border-slate-600 p-1 rounded-lg' type='text' name='productColor4' id='productColor' />
          <input onChange={productColor5Handler} className='border-2 w-full border-slate-600 p-1 rounded-lg' type='text' name='productColor5' id='productColor' />
        </div>
        <label htmlFor='productStock'>Cantidad</label>
        <input onChange={productStockHandler} className='border-2 border-slate-600 p-1 rounded-lg' type='number' min={0} name='productStock' id='productStock' />
        <label htmlFor='productDescription'>Descripción</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productDescription' id='productDescription' />
        <div className='flex flex-col items-start p-2 justify-start lg:w-full lg:flex-row lg:justify-around'>
        {categories.map(catg => 
          <label key={catg.id} htmlFor='categories'>
            <input type='checkbox' className='appearance-none bg-white border border-slate-400 rounded-full w-4 h-4 checked:bg-emerald-500 checked:border-emerald-500' name='categories' id='categories' value={catg.name} />
            <span className='ml-2'>{catg.name}</span>
          </label>)}
        </div>
        <label htmlFor='productImage'>Subir archivo</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='file' name='productImage' id='productImage' />
        <div className='flex items-center justify-center'>
          <Button type={'submit'}>Cargar producto</Button>
        </div>
      </div>
    </div>
  )
}