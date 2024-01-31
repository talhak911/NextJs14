'use client'


import {Provider, UseDispatch,useSelector } from "react-redux";
import {store} from '@/app/store/store'
import './globals.css'


export default function RootLayout({
  children,
}: { 
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>



      <body >{children}</body>
      </Provider>  
    </html>
  )
}
