import {React, useState, useEffect } from 'react';
import axios from 'axios';

export const Data= ({ data, fCall, ...props }) => {
  const [item, setData] = useState([]);
  
    useEffect(() => {

      let dataObject = {
        champ: null,
        item: null
      };

      const fetchDataChamp = async () => {
        const result = await axios(
          'http://ddragon.leagueoflegends.com/cdn/11.10.1/data/fr_FR/champion.json',
        )
        let tabChamp = []
        for(let data  in result.data.data){
          tabChamp.push(result.data.data[data])
        }
        dataObject.champ = tabChamp;
      };
      
      const fetchDataItem = async () => {
        const result = await axios(
          'http://ddragon.leagueoflegends.com/cdn/11.10.1/data/fr_FR/item.json',
        )
        let tabItem = []
        for(let data  in result.data.data){
          tabItem.push(result.data.data[data])
        }
        dataObject.item = tabItem;
      };
      fetchDataChamp();
      fetchDataItem();

      setData(dataObject);
    }, [])

    fCall(item)

    return(
      <div>
       
      </div>
    )
};

Data.propTypes = {
 
};
Data.defaultProps = {
  
};
export default Data;
