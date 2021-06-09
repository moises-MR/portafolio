import React from 'react';
import styled from "@emotion/styled";

const DivIcons = styled.div`

    display: flex;
    justify-content: space-around;
margin-top: 5rem;
margin-bottom: 2rem;


`;

const DivDerechos = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;



h4{

    margin: .2rem 0;
    font-weight: bold;
}


`;




const Footer = () => {
    return ( 
<div>

<DivIcons>

<a href="https://github.com">
<svg  viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"/></svg>
</a>

<a href="https://www.facebook.com/Desarrollo-de-Software-MR-111284933760445">
<svg height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m512 30.90625v450.1875c0 17.070312-13.835938 30.90625-30.90625 30.90625h-450.1875c-17.070312 0-30.90625-13.835938-30.90625-30.90625v-450.1875c0-17.070312 13.835938-30.90625 30.90625-30.90625h450.1875c17.070312 0 30.90625 13.835938 30.90625 30.90625zm0 0" fill="#1680f6"/><path d="m64.222656 512h-33.316406c-17.070312 0-30.90625-13.835938-30.90625-30.90625v-450.1875c0-17.070312 13.835938-30.90625 30.90625-30.90625h33.316406c-17.070312 0-30.90625 13.835938-30.90625 30.90625v450.1875c0 17.070312 13.835938 30.90625 30.90625 30.90625zm0 0" fill="#439ef4"/><path d="m512 30.90625v450.1875c0 17.070312-13.835938 30.90625-30.90625 30.90625h-199.03125c152.582031-175.789062 169.96875-420.992188 170.824219-512h28.207031c17.070312 0 30.90625 13.835938 30.90625 30.90625zm0 0" fill="#4c60dc"/><path d="m292.273438 203.28125v43.351562h64.355468c6.457032 0 11.699219 5.242188 11.699219 11.703126v49.140624c0 6.460938-5.242187 11.703126-11.699219 11.703126h-64.355468v192.820312h-72.546876v-192.820312h-64.355468c-6.457032 0-11.699219-5.242188-11.699219-11.703126v-49.140624c0-6.460938 5.242187-11.703126 11.699219-11.703126h64.355468v-50.511718c0-57.265625 46.417969-103.695313 103.695313-103.695313h33.207031c6.457032 0 11.699219 5.242188 11.699219 11.703125v49.140625c0 6.472657-5.242187 11.703125-11.699219 11.703125h-26.046875c-21.15625 0-38.308593 17.152344-38.308593 38.308594zm0 0" fill="#deefff"/></svg>
</a>



<a href="https://www.linkedin.com/in/mois%C3%A9s-ramirez-4a4091213/">
<svg height="80" viewBox="0 0 512 512" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m512 0h-256l-128 256 128 256h256zm0 0" fill="#057aad"/><path d="m0 0h256v512h-256zm0 0" fill="#0691ce"/><path d="m106 196h60v225h-60zm0 0" fill="#fff"/><path d="m166 121c0 16.570312-13.429688 30-30 30s-30-13.429688-30-30 13.429688-30 30-30 30 13.429688 30 30zm0 0" fill="#fff"/><path d="m308.5 196c-19.335938 0-37.34375 5.640625-52.5 15.347656l-30 30 30 59.652344c0-24.851562 20.148438-45 45-45s45 20.148438 45 45v120h60v-127.5c0-53.847656-43.652344-97.5-97.5-97.5zm0 0" fill="#d5f1fe"/><path d="m196 196h60v225h-60zm0 0" fill="#fff"/></svg>
</a>


</DivIcons>

<DivDerechos>
<h4>Todos los derechos reservados</h4>
<h4>Copyright © 2021.</h4>
</DivDerechos>


</div>

     );
}
 
export default Footer;


