import React from 'react'
import styles from './Botao.module.css'

const Botao = ({texto}) => {
  return (
    <button className={styles.botao}> {texto} </button>
  )
}

export default Botao