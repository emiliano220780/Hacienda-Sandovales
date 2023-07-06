import '../estilos/tar.css';
import LogoReal from '../../img/LogoReal.png';
import DonJulio from '../../img/tequila1.jpg'
import {useState} from 'react';
// import LogoReal from '../../../src/img/img2/LogoReal.png';
export default function InterfaceBuy(){
    // const [value, setValue] = useState(0);

    // const handleChange = (event) => {
    // setValue(event.target.value);
    // };
    return(
<div>
        <div class="contenedor1">
            <p class="contenedor12">Haciendas Sandovales</p>
        </div>
        <img src={LogoReal} alt="" class="tequila"/>
        <div class="main">
            <p class="prin">tequila SANDOVALES
            Precio: $440 pesos 
            Contenido: 450 ml</p>
            <p class="text">¡Disfruta del auténtico sabor del Tequila Sandovales! 
            Este tequila de alta calidad te brinda una experiencia única en cada sorbo. Elaborado con agave seleccionado y siguiendo métodos tradicionales de destilación, el Tequila Sandovales ofrece un equilibrio perfecto entre suavidad y sabor.</p>
            <div class="caja">
                <img src={DonJulio} alt="" class="tequila1"/>
            <button class="comp">Comprar</button>
            <button class="carr">Agregar al carrito</button>
            <input class="cant" 
            type="number" value=""/>
            </div>
            </div>
</div>
    );


}