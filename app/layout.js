'use client'
import './globals.css'
import 'jquery'
import { Inter } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'
const inter = Inter({ subsets: ['latin'] })
const metadata = {
  title: 'Digital Electronics Calculator',
  description: 'A digital electonics calculator for conversion , and other operations',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <Header />
        {children}
      <Footer />
      </body>
    </html>
  )
}
