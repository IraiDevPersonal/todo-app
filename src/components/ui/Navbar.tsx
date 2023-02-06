export function Navbar({ children }: { children: React.ReactNode }) {
   return (
      <nav className="w-full sticky top-0 dark:bg-neutral-800 bg-neutral-50">
         <div className="h-16 flex items-center justify-between gap-4 container mx-auto">
            {children}
         </div>
      </nav>
   )
}
