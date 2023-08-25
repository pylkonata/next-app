import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl text-orange-600">About us</h1>
      <ul className='flex mt-4 gap-10'>
        <li className="text-2xl text-red-700">
          <Link href='/about/contacts'>Contact</Link>
        </li>
        <li className="text-2xl text-red-700">
          <Link href='/about/team'>Team</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
