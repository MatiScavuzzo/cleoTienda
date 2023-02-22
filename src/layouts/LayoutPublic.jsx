import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../components/Button'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'
import { DbContext } from '../contexts/DbContext'

export const LayoutPublic = () => {
  const { isLogged, logOutHandler } = useContext(DbContext)
  return (
    <>
      <div className='flex w-full bg-slate-100 gap-2 border-b-2 border-black'>
        <div className='flex w-3/5 items-baseline'>
          <Title className={'text-6xl p-2'} />
          <Subtitle className={'text-3xl p-2 font-semibold'} />
        </div>
        <div className='flex items-center p-2 justify-end w-2/5'>
          {isLogged && <Button onClick={logOutHandler}>Cerrar sesión</Button>}
        </div>
      </div>
      <div className='flex items-center justify-center p-4'>
        <Outlet />
      </div>
    </>
  );
}