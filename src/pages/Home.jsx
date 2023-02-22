import { useContext } from 'react'
import { SignInForm } from '../containers/SignInForm'
import { UploadForm } from '../containers/UploadForm'
import { DbContext } from '../contexts/DbContext'

export const Home = () => {
  const { isLogged } = useContext(DbContext)
  return (
    <>
      {isLogged ? <UploadForm /> : <SignInForm />}
    </>
  )
}