export const Button = ( { children, type, onClick } ) => {
  return (
    <button type={type} onClick={onClick} className='p-2 rounded-lg border-2 border-slate-600 bg-slate-400 text-black font-bold shadow-sm shadow-slate-700'>
      {children}
    </button>
  )
}