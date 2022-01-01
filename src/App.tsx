import React from 'react'
import {MainLayout} from './components/MainLayout/MainLayout'
import {HashRouter} from 'react-router-dom'

export const App = () => {
   return (
      <HashRouter>
         <MainLayout/>
      </HashRouter>
   )
}
