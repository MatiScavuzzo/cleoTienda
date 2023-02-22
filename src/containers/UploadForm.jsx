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
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='productColor' id='productColor' />
        <label htmlFor='productStock'>Cantidad</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='number' min={0} name='productStock' id='productStock' />
        <label htmlFor='categories'>Categorias</label>
        <label htmlFor='productImage'>Subir archivo</label>
        <input className='border-2 border-slate-600 p-1 rounded-lg' type='file' name='productImage' id='productImage' />
        <div className='flex items-center justify-center'>
          <Button type={'submit'}>Cargar producto</Button>
        </div>
      </div>
    </div>
  )
}