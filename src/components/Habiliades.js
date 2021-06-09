import React from "react";
import styled from "@emotion/styled";




import logoHtml from "../img/logo-html.png";
import logoCss from "../img/logo-css.png";
import logoJavascript from "../img/logo-javascript.png";
import dartLogo from "../img/dart.png";
import logoFlutter from "../img/logo-flutter.png";
import logoReact from "../img/logo-react.png";
import logoPhotoshop from "../img/logo-photoshop.png";
import logoPhp from "../img/logo-php.png";
import logoSql from "../img/sql-logo.png";
import logoGit from "../img/logo-git.png";
import codigoGif from "../img/codigo.gif";

//Estilos del header

const DivHabilidades = styled.div`


background: url(${(props)=>props.imgUrl}) ;

  display: flex;
  flex-direction: column;
  padding: 1rem;
  
  @media (max-width: 468px) {
    align-items: center;
    position: relative;
    bottom: 5rem;
  }
  
`;

const ImgLogo = styled.img`
  width: 5rem;


&:hover{

    width: 100px;
 
}



`;

const DivContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    height: 8rem;
    background-color:#ade8f4bb;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    margin-top: 2rem;
    transition: all 1s;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.692);
   


 
`;


const DivContentHabilidades = styled.div`


    display: grid;

    grid-template-columns: 1fr 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;


const Titulo = styled.h2`

font-size: 2rem;
color: #FFFFFF;
text-align: center;

`;






const Habiliades = () => {
















  return (
    <DivHabilidades imgUrl={codigoGif}>
<Titulo>Mis Habilidades</Titulo>

<DivContentHabilidades>

      <DivContainer id="html">

        <ImgLogo src={logoHtml} />

      </DivContainer>

      <DivContainer>
        <ImgLogo src={logoCss} />
      </DivContainer>

      <DivContainer>
        <ImgLogo src={logoJavascript} />
      </DivContainer>

      <DivContainer>
        <ImgLogo src={dartLogo} />
      </DivContainer>

      <DivContainer>
        <ImgLogo src={logoFlutter} />
      </DivContainer>
  


  
      <DivContainer>
        <ImgLogo src={logoReact} />
      </DivContainer>

      <DivContainer>
        <ImgLogo src={logoPhotoshop} />
      </DivContainer>
      <DivContainer>
        <ImgLogo src={logoPhp} />
      </DivContainer><DivContainer>
        <ImgLogo src={logoSql} />
      </DivContainer><DivContainer>
        <ImgLogo src={logoGit} />
      </DivContainer>


   
      </DivContentHabilidades>

    </DivHabilidades>
  );
};

export default Habiliades;
