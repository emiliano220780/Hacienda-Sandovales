import '../Sai/login.css'
import facebook from '../../img/face.png';
import google from '../../img/google.png';
export default function login() {
    return (

        <div className="nu">
            <center><h1>Haciendas Sandovales</h1></center>
            <p className="in">¡Con mas de 1,000 productos y promociones todos los dias!</p>
            <input type="email" className="text" placeholder="                       Usuario" />
            <input type="password" className="text" placeholder="                   Contraseña" />

            <input type="button" name="iniciar" id="" className="button" value="iniciar sesion" />


            <div className="face">
                <div className="faceimg">
                    <img src={facebook} alt="Facebook" className="icon iconoface" />
                    </div>
                    <center><h4 className="let">Facebook</h4></center>
                    </div>

            <div className="gooimg">
                <div className="goo">
                    <img src={google} alt="google" className="icon"/>
                        <h4 className="h">Google</h4>
                        </div>
            </div>
            <p className="sug">¿No tienes cuenta?<a href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAANlBMVEXkAwN1B4f/jAD/7QAAgCYATf/3agH/jgD/iQD/rQD/8QD56wAAfyYAggAAXs0AS/8xO915AIDwFIeWAAABQUlEQVR4nO3Sy1UCAADEwJW/AiL9N0sHuXidKSEvGwAAAAAAAADA/10IuxJ2IMiT5EnyJHmSPEmeJE+SJ8mT5EnyJHmSPEmeJE+SJ8mT5EnyJHmSPEmeJE+SJ8mTdiPsm7Afwo4EeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8aXfCToQ9CO5J8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8qQ9Cfsl7EXYmSBPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkiftj7A3YV8EeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8SZ4kT5InyZPkSfIkeZI8SZ70Ab3sXaMGkc4/AAAAAElFTkSuQmCC">Click aqui</a></p>
            <img src="img/tequila.png" alt="" className="teq"/>
            </div>
                );
}