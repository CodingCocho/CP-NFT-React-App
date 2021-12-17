import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PunkList from './components/PunkList';

function App() {
  
 const [punkListData, setPunkListData] = useState([])
 
 useEffect(() => {
   const getMyNfts = async () =>
   {
     const openseaData = await axios.get('https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x5656d6f0D65BC249526F95072D4F25A3F7214971&direct')
   }
   console.log(openseaData.data.assets)
   setPunkListData(openseaData.data.assets)
 }, [])
  return (
    <div className="App">
        <Header />
        <PunkList punkListData={punkListData} />
    </div>
  );
}

export default App;
