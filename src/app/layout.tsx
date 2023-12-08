import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import ToastProvider from './lib/toast.provider'

export const metadata: Metadata = {
  title: 'Example Toastify',
  description: 'use react-toastify',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  )
}
