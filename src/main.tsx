import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { persistor, store } from './app/store.ts'
import { BatchProd } from './pages/BatchProd'
import { HomePage } from './pages/HomePage'
import { PersistGate } from 'redux-persist/integration/react'

const mainStore = store

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/batchProd",
    element: <BatchProd/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
    
  </React.StrictMode>,
)
