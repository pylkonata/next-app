import { Header } from '@/components/Header'
import '../globals.css';
import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'


export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className='min-h-screen bg-slate-50 dark:bg-black dark:text-white flex flex-col ' suppressHydrationWarning={true}>
        <Header />
        <main className='flex-1'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
