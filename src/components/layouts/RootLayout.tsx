import { useLayoutEffect } from 'react'

function RootLayout({ children, title }: { children: React.ReactNode; title: string }) {
   useLayoutEffect(() => {
      document.title = `To-do | ${title}`
   }, [title])

   return (
      <main className="dark:bg-neutral-900 dark:text-neutral-100 bg-neutral-100 text-neutral-800 min-h-screen w-screen overflow-x-hidden">
         {children}
      </main>
   )
}

export default RootLayout
