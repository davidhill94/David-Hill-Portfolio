import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Footer from './components/footer'
import Navigation from './components/navigation'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700", "900"] })

export const metadata: Metadata = {
  title: 'David Hill Portfolio',
  description: 'Welcome to the Portfolio of David Hill, Front End Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary`}>
        <Navigation />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
