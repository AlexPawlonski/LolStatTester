import {React, useState, useEffect} from 'react';

export const ListeChamp = ({ data, fCallBack, ...props }) => {
    return(
        <div>
            <lu className= "overflow-auto h-80 block ">
                { (data.length > 0) ? data.map(val => <li onClick={() => fCallBack(val.id)} className="cursor-pointer hover:border-black border-2 " key={val.key}><div>{val.id} </div></li>) : <li>[poro] ? </li>}
            </lu> 
        </div>
    )
};

export default ListeChamp;