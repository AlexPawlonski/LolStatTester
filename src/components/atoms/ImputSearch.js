import {React, useState, useEffect} from 'react';

export const ImputSearch = ({ fCallBack, ...props }) => {
    
    return(
        <div>
            <input placeholder="Search ..."  onChange={fCallBack}></input>
        </div>
    )
};

export default ImputSearch;