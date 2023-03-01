import { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../components/Button'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'
import { DbContext } from '../contexts/DbContext'
import { AiOutlineLogout } from 'react-icons/ai'

export const LayoutPublic = () => {
  const [buttonContent, setButtonContent] = useState('')
  const { isLogged, logOutHandler } = useContext(DbContext)
  useEffect(() => {
    const updateButtonContent = () => {
      const width = window.innerWidth
      if (width < 640) {
        setButtonContent(<AiOutlineLogout />)
      } else {
        setButtonContent('Cerrar sesión')
      }
    }
    window.addEventListener('resize', updateButtonContent)

    updateButtonContent()
    return () => window.removeEventListener('resize', updateButtonContent)
  }, [])
  return (
    <>
      <div className='flex w-full bg-slate-100 gap-2 border-b-2 border-black'>
        <div className='flex flex-col md:flex-row w-3/5 items-baseline'>
          <Title className={'text-3xl sm:text-5xl p-2'} />
          <Subtitle className={'text-xl sm:text-2xl p-2 font-semibold'} />
        </div>
        <div className='flex items-center p-4 justify-end w-2/5'>
          {isLogged && <Button onClick={logOutHandler}>{buttonContent}</Button>}
        </div>
      </div>
      <div className='flex items-center justify-center p-4'>
        <Outlet />
      </div>
    </>
  );
}