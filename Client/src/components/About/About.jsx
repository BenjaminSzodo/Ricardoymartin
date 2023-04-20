import photo from '../../assets/mifoto.jpg'
import style from './About.module.css'

export default function About () {
    return (
       <div className={style.container}>
        <img src={photo} alt="Benjamin Szodo" className= {style.mifoto}/>
        <h1 className={style.main}>Sobre mi...</h1>
        <h2 className={style.secondary}>🤔Quien soy?🤔</h2>
        <p className={style.text}>
         Soy un chico normal que quiere hacer un cambio rotundo en su vida,tanto 
         a nivel laboral como personal. Trato de dar lo mejor de mi en lo que hago
         y principalmente si eso me gusta.
        </p>
        <h2 className={style.secondary}>🎭Intereses/Gustos🎭</h2>
        <p className={style.text}>
         Me gustan mucho los videojuegos, salir a caminar y las buenas vibras. Actualmente
         dedico mi tiempo al estudio, en especial al gimnasio, aunque este ultimo lo realizo ya hace 2 años.
        </p>
        <h2 className={style.secondary}>🏅Logros🏅</h2>
        <ul className={style.lists}>
         <li>✅ Terminar estudios secundarios en un colegio tecnico(Actualmente tengo el titulo de técnico aeronáutico).</li>
         <li>✅ Terminar instituto de inglés(AMICANA).</li>
         <li>✅ Crear una diciplina respecto al gimnasio.</li>
        </ul>
        <h2 className={style.secondary}>En proceso...</h2>
        <ul className={style.lists}>
        <li>🔄 Terminar curso en Henry.</li>
        <li>🔄 Popularizar mi canal de Twitch.</li>
        <li>🔄 Alcanzar mi peso deseado en el gimnasio.</li>
        </ul>
        
        
       </div>
    );
 }