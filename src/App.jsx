import { Subtitle } from './components/Subtitle'
import { Title } from './components/Title'

export const App = () => {
  return (
    <div className='flex bg-slate-100 gap-2 items-baseline border-b-2 border-black'>
      <Title className={'text-6xl p-2'} />
      <Subtitle className={'text-3xl p-2 font-semibold'} />
    </div>
  )
}