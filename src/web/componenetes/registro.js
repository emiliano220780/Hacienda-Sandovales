import '../estilos/style.css';

export default function registro(){
    return (
        <div class="container">
    <h2>REGISTRO</h2>
    <form>
      <input type="text" name="nombr/e" placeholder="Nombr/e"/>
      <br/>
      <br/>
      <input type="email" name="email" placeholder="Correo electrónico"/>
      <br/>
      <br/>
      <input type="password" name="password" placeholder="Contraseña"/>
      <br/>
      <br/>
      <input type="submit" value="Registrarse"/>
    </form>
    <div class="social-login">
      <br/>
      <div class="btn">
        <i class="fa-br/ands fa-facebook" style="color: #0322fc;"></i>
        <a href="#" class="btn"> Registrarse con Facebook </a>
      </div>
      <br/>
      <br/>
      <div class="btn">
        <i class="fa-br/ands fa-google" style="color: #03d831;"></i>
        <a href="#" class="btn"> Registrarse con Google </a>
      </div>
    </div>
    </div>
    );
}