import { useEffect, useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/main'


function App() {
  const [coin, setCoin] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setCoin(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(coin);
  
  
  return (
    
    <div className='w-full flex justify-center'>
      <div className='w-full 2xl:container text-amber-50 p-4'>
       <Header/>
       <Main coin={coin}/>
      </div>
      
    </div>
  )
}

export default App
