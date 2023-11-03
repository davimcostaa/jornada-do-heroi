import React from 'react'
import Botao from '../Botao'
import styles from './TituloPrincipal.module.css'

const TituloPrincipal = () => {
  return (
    <section className={styles.sectionTitulo} >
        <h2 className={styles.tituloSecundario}> Escolha suas cartas </h2>
        <h2 className={styles.tituloPrincipal}> e <span className={styles.tituloSpan}> DIVIRTA-SE </span>  </h2>

        <Botao texto='Jogar' />
    </section>
  )
}

export default TituloPrincipal