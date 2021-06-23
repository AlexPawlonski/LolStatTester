import {React, useState, useEffect} from 'react';
import ImputSearch from '../atoms/ImputSearch';
import ListeChamp from '../molecules/ListeChamp';


export const ChampSelect = ({ data, fCallBack, ...props }) => {
    
    const [ champListe = data , setChampListe] = useState([]);

    useEffect(() => {
        setChampListe(data)
    },[])

    function searchChamp(e){
        if (e.target.value === "") {
            setChampListe(data)
        }else{
            const result = data.filter(item => item.id.toLowerCase().includes(e.target.value.toLowerCase()));
            setChampListe(result)
        }
    }

    function selectChamp(id){
       const result = data.filter(item => item.id.includes(id));
       let champ = result[0]
       fCallBack(champ);
    }


    return(
        <div className="w-32 overflow-hidden">
            <div>
                <ImputSearch fCallBack={searchChamp} />
            </div>
            <div>
                {champListe === undefined ? <p>load ...</p> : <ListeChamp data={champListe}  fCallBack={selectChamp}/>}
            </div>
        </div>
    )
};

export default ChampSelect;