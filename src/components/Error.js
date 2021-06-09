import React from 'react';
import styled from "@emotion/styled";


const DivError = styled.div`


width: 100%;
height: 5rem;
background-color: red;
display: flex;
justify-content: center;
align-items: center;




h4{
    font-weight: bold;
    font-size: 1.6rem;
    color: #FFF;
text-align: center;

}

`;



const Error = ({error}) => {
    return ( 

        <DivError>
        <h4>{error}</h4>
        </DivError>

  
     );
}
 
export default Error;