'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';

type NavLink = {
  label: string;
  href: string; 
}
type Props =  {
  navLinks: NavLink[];
}
export const Navigation = ({ navLinks }: Props) => {
  const pathname = usePathname();
  const active = 'text-teal-400';
  const navList = navLinks.map((link) => {
    const isActive = pathname === link.href;
    return (
      <Link key={link.label} href={link.href} className={isActive ? active : ''}>
        {link.label}
      </Link> 
    )
  });

  return (
    <>
      {navList}
    </>
  )
}
