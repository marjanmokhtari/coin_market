import { useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/main'

function App() {
  const [coin, setCoin] = useState(null)


  return (
    
    <div className='w-full flex justify-center'>
      <div className='w-full 2xl:container text-amber-50 p-4'>
       <Header/>
       <Main/>
      </div>
      
    </div>
  )
}

export default App
