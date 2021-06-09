import React,{Fragment,useState} from 'react';
import styled from "@emotion/styled";
import Swal from 'sweetalert2'
import Error from "./Error";


import "./boton.css";


import Spinner from "./Spinner"


const Titulo = styled.h2`
margin-top: 1rem;
text-align: center;
font-size: 2rem;

`;



const Formulario = styled.form`


width: 60%;
padding: 2rem;
background-color: #0076b696;
border-radius: 1rem;
display: flex;
flex-direction: column;
margin: 1rem auto;


label{
    margin:.3rem;
    font-weight: bold;
  
}




input{
   border : none;
   padding: .6rem 0;
   margin: .5rem;
   border-radius: .5rem;

}


textarea{

    height: 10rem;
    border-radius: .5rem;
    border: none;
}







`;










const Contact = () => {

 

//States


const [error, activarError]= useState(false);
const [mostrarSpinner, activarSpinner]= useState(false);

const [contacto,guardarContacto] = useState({

  nombre:"",
  correo:"",
  telefono:"",
  mensaje:""
  
  
});




//Funcione guarda los datos en el state

const obtenerContacto = (e) =>{


  guardarContacto({
    ...contacto,
    [e.target.name] : e.target.value
  })

}



const validarFormulario = e =>{
  e.preventDefault();


  if(nombre.trim() === "" || correo.trim() === "" || 
  telefono.trim() === "" || mensaje.trim() === "" ){
    activarError(true);
  return;

  }

  
// activar Spinner 

activarSpinner(true);


  setTimeout(() => {


    guardarContacto({

  
      nombre:"",
      correo:"",
      telefono:"",
      mensaje:""
    
    })
    
activarSpinner(false);

Swal.fire({

  icon: 'success',
  title: 'Tu mensaje ha sido enviado',
  showConfirmButton: false,
  timer: 1600
})
    

  }, 2150);

activarError(false);




// Regresar los inputs a estado original



  

}


// datos con   array destructuring

const {nombre,correo,telefono,mensaje} = contacto;








    return ( 
<Fragment>

<Titulo id="contacto">Contactame</Titulo>
{error ? <Error error="Todos los campos son obligatorios"/> : null}

<Formulario
onSubmit={validarFormulario}
>



       <label>Nombre:</label>
        <input
        type="text"
        onChange={obtenerContacto}
        name="nombre"
        value={nombre}

        
        />
       <label>Correo electronico:</label>
        <input 
        type="email"
        onChange={obtenerContacto}
        name="correo"
        value={correo}
        />
        
       <label>Telefono:</label>
       <input
        type="text"
        onChange={obtenerContacto}
        name="telefono"
        value={telefono}

        
        />
  { mostrarSpinner ?  <Spinner/> : null}
       <label>Mensaje:</label>
        <textarea
        onChange={obtenerContacto}
        name="mensaje"
        value={mensaje}
        >
        </textarea>
  
        <button className="button">
	Enviar
	<div className="button__horizontal"></div>
	<div className="button__vertical"></div>
</button>






</Formulario>
</Fragment>
   
     );
}
 
export default Contact;