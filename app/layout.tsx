import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import { classNames } from '@/lib/utils'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Todo App',
  description: 'A simple todo app built with Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'flex flex-col min-h-svh')}>
        <header className="flex items-center justify-between p-8">
          <Link href="/" className="flex items-center space-x-4">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold">Simple Todo App</h1>
          </Link>
        </header>
        {children}
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <p className="text-gray-500 text-xs">
            Made with ❤️ by{' '}
            <a
              href="maxencedhx.dev"
              className="text-stone-500 underline"
              rel="noreferrer noopener"
              target="_blank"
            >
              Maxence
            </a>
          </p>
        </footer>
      </body>
    </html>
  )
}
