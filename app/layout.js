import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ClimateGradient',
  description: 'Explore the real-time impact of climate change through interactive data visualizations, maps, and simulations. Understand temperature trends, sea level rise, and extreme weather events. Empower yourself with knowledge to take action in the fight against climate change',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
