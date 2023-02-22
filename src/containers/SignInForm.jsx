import { useContext } from 'react'
import { Button } from '../components/Button'
import { DbContext } from '../contexts/DbContext'

export const SignInForm = () => {
  const { passwordHandler, userNameHandler, onSubmitHandler, isLogged} = useContext(DbContext)
  return (
    <div className={'w-1/2 bg-slate-200 border-2 border-slate-400 shadow-2xl shadow-slate-600 rounded-lg'}>
      <div className='flex flex-col  p-4 gap-2'>
        <label htmlFor='user'>Usuario</label>
        <input onChange={userNameHandler} className='border-2 border-slate-600 p-1 rounded-lg' type='text' name='user' id='user' />
        <label htmlFor='password'>Contraseña</label>
        <input onChange={passwordHandler} className='border-2 border-slate-600 p-1 rounded-lg' type='password' name='password' id='password' />
        <div className='flex items-center justify-center'>
          <Button onClick={onSubmitHandler} type={'submit'}>Ingresar</Button>
        </div>
      </div>
    </div>
  )
}