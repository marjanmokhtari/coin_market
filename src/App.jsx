import { useState } from 'react'
import CoinLogo from './assets/coinmarketcap_white_1.svg'

function App() {
  const [coin, setCoin] = useState(null)


  return (
   <div>
    <img src={CoinLogo} alt="" />
   </div>
  )
}

export default App
