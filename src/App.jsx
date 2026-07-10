import { Routes, Route } from 'react-router-dom'
import MainLayout from '@/mainlayout'
import HeroBanner from '@/components/heroBanner'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
           <MainLayout>
              <HeroBanner />
           </MainLayout>
        } />
      </Routes>
    </>
  )
}

export default App
