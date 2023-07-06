import '../estilos/cerca.css';
// import tequila from '../../img/img/teq.png';
import navlogo from '../../img/LogoReal.png';
import Tequila from '../../img/teq.png'
export default function Cercade() {

    return (
        <div><nav>
        <div class="logo">
            <img src={navlogo} alt="logo" class="logo"/>
        </div>
            <a class="nh" href="#">Inicio</a>

            <a class="nh" href="#direc">Direccion</a>
            <a class="nh" href="#contact">Contacto</a>
                <a href="/Sai/MainSal.html" class="log"> iniciar sesion </a>
        <a href="/registro/formulario de regitro.html" class="reg"> registrarse </a>
        
    </nav>
    {/* <!-- <nav class="nav2"></nav> --> */}
    <div class="eslogan" > <h4 class="h4eslo">a tu alcance</h4>
        <h1 class="h1eslo">¡LA MEJOR DE TEQUILERIA!</h1>
    </div>
    <img src={Tequila} alt="" class="tequilapromo"/>
        <div class="card"> 
            <ul>
            <li><a class="cer" href="#hiperid" target="_self">
            
            <span></span>
            <span></span>
            <span></span>
            <span></span>     
            <p> Acerca de </p>
            
            </a> </li>
        </ul>
    </div>
    <br/>
    <br/>
    {/* <!-- 
    <img src="/img/Fonder.png" alt="" class="hrimg">
    --> */}
    <div class="content-dir" id="direc">
        <div class="direccion">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d933.8632308209613!2d-102.18257170883693!3d21.007772011758114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84295ddcb4a868b7%3A0xeba8f05a834b0f7a!2sAldama%20Ote.%20102%2C%20Centro%2C%2047170%20San%20Juli%C3%A1n%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1687234147303!5m2!1ses-419!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
            <div class="cargps">
                <h1>VISITANOS YA </h1>
                <h4 class="fonh"> Jalisco, la tierra que vio nacer al tequila, celebra una relación íntima con esta icónica bebida espirituosa. Con su clima ideal y rica tradición agavera, Jalisco produce los mejores tequilas del mundo. Descubre la pasión y el sabor únicos que solo Jalisco puede ofrecer en cada sorbo de tequila</h4>
                <img src="../../img/jaliscocard.jpg" alt="" class="imgframe"/>
            </div>
        </div>
    </div>




    <div class="cercade" id="hiperid">
        <h1 class="acerca">ACERCA DE</h1>
        <h4 class="info">¡Bienvenido a nuestra tequilería en línea!
            Descubr/e la esencia de México en nuestra amplia selección de tequilas de alta calidad. Te ofrecemos una experiencia única para los amantes de esta emblemática bebida.
            Explora nuestra variedad de tequilas artesanales y de renombr/adas marcas reconocidas por su excelencia. Desde los clásicos tequilas reposados y añejos hasta los vibr/antes tequilas blancos, tenemos algo para todos los gustos.
            Sumérgete en la tradición y el legado del tequila mientras exploras nuestra tienda virtual. Cada botella cuenta una historia y te invita a disfrutar de su sabor distintivo. Nuestros productos son cuidadosamente seleccionados para garantizar la más alta calidad y autenticidad.
            Ya sea que estés buscando el regalo perfecto o simplemente quieras deleitarte con un tequila excepcional, estamos aquí para ayudarte. Nuestro objetivo es br/indarte una experiencia de compra satisfactoria y garantizarte la entrega segura de tu selección.</h4>
            <img src={Tequila} alt="" class="imgacer"/>
            <h3 class="descu">Descubr/e mas con la tienda virtual 100% mexicana</h3>
    </div>
    <div class="contact-container" id="contact">
        <div class="cardemail">
            <h1>CONTACTANOS MEDIANTE CORREO ELECTRONICO</h1>
            <div class="contact-left">
                <br/>
                <br/><br/>
                <br/><br/>
                <p class="continfo">
                    Si tienes alguna duda o consulta, no dudes en escribir
                </p>

                <br/>
                <p class="continfo">Correo Electronico</p>
                <p id="infcont">haciendasSandovales@gmail.com</p>
                <p class="continfo">Telefono</p>
                <p id="infcont">+52 1 347 118 0258</p>
                <p class="continfo">Instagram</p>
                <p id="infcont">Haciendas _Sandovales</p>
            </div>
            <div class="contact-right">
                <form action="">
                    <label for="NAME">NOMBRE</label><br/>
                    <input type="text" name="nombr/e" class="form-contact"/>
                    <br/>                     <br/>
                    <label for="email">Email:

                    </label>
                    <br/>                    <br/>
                    <input type="email"  class="form-contact"/>
                    <br/><br/>
                    <label for="Telefono">Telefono (opcional)</label>
                    <br/>
                    <input type="text" class="form-contact"/><br/>
                    <br/>
                    <label for="Telefono">Mensaje</label>
                    <br/> <br/>
                    <input type="text" name="" id="mensaje" class="form-contact"/>
                    <br/> <br/>

                    {/* <!-- <textarea rows="6"></textarea>
                    <button type="submit">Enviar M --> */}
                        <input type="submit" value="Enviar" class="boton-contact"/>
                    </form>
            </div>
        </div>
        
    </div>
</div>
    );
}