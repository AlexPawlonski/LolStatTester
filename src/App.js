import './App.css';
import Data from './components/Data';
import {React, useState} from 'react';
function App() {

  const [ dataApi, setData] = useState([]);
  function updateData (data) {
    setData(data);
  }
  console.log(dataApi);
  return (
    <div className="wrapper">
        <div className="">
          <Data fCall={updateData}/>
          {dataApi.champ.map( data => <p>{data.id}</p>)}
          {dataApi.item.map( data => <p>{data.name}</p>)}
        </div>
    </div>
  );
}


export default App;
