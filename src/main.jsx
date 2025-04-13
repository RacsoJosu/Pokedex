import React from 'react'
import ReactDOM from 'react-dom/client'
import {thunk} from 'redux-thunk'
import { logger } from './middlewares'
import { Provider } from 'react-redux'

import rootReducer from './reducers/rootReducer.js'
import { configureStore } from '@reduxjs/toolkit'
import { router } from './router.jsx'
import { RouterProvider } from 'react-router-dom'


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger )
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
