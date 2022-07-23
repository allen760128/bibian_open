import React from 'react';
import Sec2 from './sec2';
import changeColr from './hocs/changeColr';



const Change=changeColr(Sec2);
const Sec22=()=>(
    <div>
        <Change/>
    </div>
);
    
export default Sec22;