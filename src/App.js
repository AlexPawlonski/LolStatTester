import './App.css';
import {React, useState, useEffect} from 'react';
import axios from 'axios';

import ChampSelect from './components/organism/ChampSelect';
import ItemSelect from './components/organism/ItemSelect';

function App() {

  const [ dataChamp, setDataChamp] = useState([]);
  const [ dataItem, setDataItem] = useState([]);

    useEffect(() => {
      const fetchDataChamp = async () => {
        const result = await axios(
          'http://ddragon.leagueoflegends.com/cdn/11.10.1/data/fr_FR/champion.json',
        )
        if (result) {
          console.log('load Data API OK');
        }else{
          console.log('load Data API Fail');
        }
        let tabChamp = []
        for(let data  in result.data.data){
          tabChamp.push(result.data.data[data])
        }
        setDataChamp(tabChamp)
        
      };

      const fetchDataItem = async () => {
          const result = await axios(
            'http://ddragon.leagueoflegends.com/cdn/11.10.1/data/fr_FR/item.json',
          )
          if (result) {
            console.log('load Data API OK');
          }else{
            console.log('load Data API Fail');
          }
          let tabItem = []
          for(let data  in result.data.data){
            tabItem.push(result.data.data[data])
          }
          setDataItem(tabItem)

        };
        fetchDataChamp();
        fetchDataItem();
        
    }, []);

    const [ champSelected, setselectChamp] = useState([]);

  return (
    <div className="wrapper">
        <div className="">
         <div>
            <ChampSelect data={dataChamp} fCallBack={setselectChamp}/>
         </div>
         <div>
            <ItemSelect dataItem={dataItem} dataChamp={champSelected}/>
         </div>
        </div>
    </div>
  );
}

export default App;
