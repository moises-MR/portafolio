import React from 'react';
import "./Spinner.css"
import styled from "@emotion/styled";



const ContSpinner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;


    .sk-chase{
        width: 60px;
        height: 60px;
    }

`;

const Spinner = () => {
    return ( 


        <ContSpinner>
        <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      </ContSpinner>
     );
}
 
export default Spinner;