import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav className="navbar" style={{ gap: '20px', justifyContent: 'center' }}>
        <Link href='/'>Home</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  )
}
