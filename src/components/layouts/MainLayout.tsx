import RootLayout from './RootLayout'
import { MainNavbar } from '../navigation'

function MainLayout({ children, title }: { children: React.ReactNode; title: string }) {
   return (
      <RootLayout title={title}>
         <MainNavbar />
         {children}
      </RootLayout>
   )
}

export default MainLayout
