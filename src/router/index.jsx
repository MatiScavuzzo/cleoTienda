import { createBrowserRouter } from 'react-router-dom';
import { SignInForm } from '../containers/SignInForm';
import { UploadForm } from '../containers/UploadForm';
import { LayoutPublic } from '../layouts/LayoutPublic';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <SignInForm />
      },
      {
        path: '/adminUser',
        element: <UploadForm />
      }
    ]
  }
])