import './App.css';
import Main from './components/Main';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';

function App() {
  
 const [punkListData, setPunkListData] = useState([])
 const [selectedPunk, setSelectedPunk] = useState(0)
 
 useEffect(() => {
   const getMyNfts = async () =>
   {
     const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x088C0C550c76bbdaa203C9D1d0122A76110408d2&order_direction=asc')
     setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
 }, [])

  return (
    <div className="App">
        <Header />
        {
          punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList punkListData={punkListData}  setSelectedPunk={setSelectedPunk}/>
          </>
          )
        }
        
    </div>
  );
}

export default App;
