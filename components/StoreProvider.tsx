'use client'
import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

type StoreProviderProps = {
  children: ReactNode
}

// use Client で使用するために Provider をラップする
export default function StoreProvider({
  children
}: Readonly<StoreProviderProps>) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}
