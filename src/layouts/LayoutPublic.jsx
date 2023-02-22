import { Outlet } from 'react-router-dom'
import { Subtitle } from '../components/Subtitle'
import { Title } from '../components/Title'
import { Navbar } from '../containers/Navbar'

export const LayoutPublic = () => {
  return (
    <>
      <div className='flex bg-slate-100 gap-2 items-baseline border-b-2 border-black'>
        <Navbar />
        <Title className={'text-6xl p-2'} />
        <Subtitle className={'text-3xl p-2 font-semibold'} />
      </div>
      <div className='flex items-center justify-center p-4'>
        <Outlet />
      </div>
    </>
  )
}