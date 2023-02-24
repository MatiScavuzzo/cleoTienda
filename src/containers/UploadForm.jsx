import { useContext } from 'react'
import { Button } from '../components/Button'
import { DbContext } from '../contexts/DbContext'

export const UploadForm = () => {
  const { categories } = useContext(DbContext)
  return (
    <div className={'w-1/2 bg-slate-200 border-2 border-slate-400 shadow-2xl shadow-slate-600 rounded-lg'}>
      <div className='flex flex-col gap-2 p-4'>
        <label htmlFor='productName'>Nombre del producto</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productName' id='productName' />
        <label htmlFor='productSize'>Talle</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productSize' id='productSize' />
        <label htmlFor='productColor'>Color</label>
        <div className='flex gap-2'>
          <input className='border-2 w-1/5 border-slate-600 p-1 rounded-lg' type='text' name='productColor1' id='productColor' />
          <input className='border-2 w-1/5 border-slate-600 p-1 rounded-lg' type='text' name='productColor2' id='productColor' />
          <input className='border-2 w-1/5 border-slate-600 p-1 rounded-lg' type='text' name='productColor3' id='productColor' />
          <input className='border-2 w-1/5 border-slate-600 p-1 rounded-lg' type='text' name='productColor4' id='productColor' />
          <input className='border-2 w-1/5 border-slate-600 p-1 rounded-lg' type='text' name='productColor5' id='productColor' />
        </div>
        <label htmlFor='productStock'>Cantidad</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='number' min={0} name='productStock' id='productStock' />
        <label htmlFor='productDescription'>Descripción</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productDescription' id='productDescription' />
        <div className='flex flex-col items-center justify-center lg:w-full lg:flex-row lg:justify-around'>
        {categories.map(catg => 
          <label key={catg.id} htmlFor='categories'>
            <input type='checkbox' name='categories' id='categories' value={catg.name} />
            <span className='p-2'>{catg.name}</span>
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