import {React, useState, useEffect} from 'react';
import ImputSearch from '../atoms/ImputSearch';
import ListeChamp from '../molecules/ListeChamp';


export const ItemSelect = ({ dataItem,dataChamp,  fCallBack, ...props }) => {
    

    return(
        <div>
            <p>{dataChamp.id}</p>
        </div>
    )
};

export default ItemSelect;