import { useState } from 'react'
import CoinLogo from './assets/coinmarketcap_white_1.svg'
import Header from './components/header/header'
import Main from './components/main/main'

function App() {
  const [coin, setCoin] = useState(null)


  return (
    <div className='w-full flex justify-center'>
      <div className='w-full 2xl:container text-amber-50 '>
       <Header/>
       <Main/>
      </div>
      {/* <img src={CoinLogo} alt="" /> */}
    </div>
  )
}

export default App
