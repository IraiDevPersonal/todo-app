import { lazy, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('./pages/page'))

function App() {
   return (
      <>
         <Suspense fallback={<>loading...</>}>
            <HashRouter>
               <Routes>
                  <Route path="/" element={<HomePage />} />
               </Routes>
            </HashRouter>
         </Suspense>
      </>
   )
}

export default App
