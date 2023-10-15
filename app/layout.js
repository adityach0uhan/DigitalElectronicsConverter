import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import Header from './Header'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Digital Electronics Calculator',
  description: 'A digital electonics calculator for conversion , and other operations',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={inter.className}>
        <Header/>
        {children}
      </body>

    </html>
  )
}
