import React from 'react'
import styles from "./page.module.css";
export const Nosotros = () => {
  return (
    <>
        <div className={styles.contenedor}>
            <img src="/nosotros1.png" className="d-block w-100 img-fluid" alt="..."  />
        </div>
        <div className={styles.textContainer}>
            <h2 className={styles.titulo}>¿Quienes somos?</h2>
            <p className={styles.texto}>
            En SustentArte, nacimos de la convicción de que el arte y la sostenibilidad pueden coexistir armoniosamente. La idea de nuestra tienda online surge de la creciente demanda de consumidores que buscan productos artesanales únicos, éticos y sostenibles. Nos embarcamos en este viaje con la firme creencia de que cada compra puede ser una elección consciente, contribuyendo a un mundo donde el comercio justo y la sostenibilidad son la norma.
            </p>
        </div>
        <div className={styles.contenedor}>
            <img src="/nosotros2.png" className="d-block w-100 img-fluid" alt="..."  />
        </div>
        <div className={styles.textContainer}>
            <h2 className={styles.titulo}>Únete a Nuestra Comunidad</h2>
            <p className={styles.texto}>
            SustentArte no es solo una tienda, es un movimiento. Nos enorgullece trabajar con artesanos talentosos y comprometernos con estándares rigurosos de comercio justo. Explora nuestra colección, conoce las historias detrás de cada pieza y únete a nuestra comunidad comprometida con un estilo de vida consciente. Tu apoyo no solo impulsa a los artesanos, sino que también contribuye a construir un mundo más sostenible y conectado.
            </p>
        </div>
        <div className={styles.contenedor}>
            <img src="/nosotros3.png" className="d-block w-100 img-fluid" alt="..."  />
        </div>
        <div className={styles.textContainer}>
            <h2 className={styles.titulo}>Únete a Nuestra Comunidad</h2>
            <p className={styles.texto}>
            SustentArte no es solo una tienda, es un movimiento. Nos enorgullece trabajar con artesanos talentosos y comprometernos con estándares rigurosos de comercio justo. Explora nuestra colección, conoce las historias detrás de cada pieza y únete a nuestra comunidad comprometida con un estilo de vida consciente. Tu apoyo no solo impulsa a los artesanos, sino que también contribuye a construir un mundo más sostenible y conectado.
            </p>
        </div>


        <div className={styles.fraseContainer}>
            <h2 className={styles.frase}>¡Bienvenido a SustentArte!</h2>
        </div>
    </>
  )
}
export default Nosotros;
