import { Routes, Route } from 'react-router-dom'
import MainLayout from './mainlayout'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
           <MainLayout>
              
           </MainLayout>
        } />
      </Routes>
    </>
  )
}

export default App
