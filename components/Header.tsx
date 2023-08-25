import Link from 'next/link'
import React from 'react'
import { Navigation } from './Navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export const Header = () => {
  return (
    <header className='bg-teal-700 text-white'>
      <nav className="max-w-4xl mx-auto p-4 flex justify-center items-center gap-6 ">
        <Navigation navLinks={navItems} />
      </nav>
    </header>
  )
}
