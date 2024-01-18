import React from 'react'
import styles from '../styles/notfound.module.css'

export default function notfound() {
  return (
    <div className={styles.container}>
      <p>a pagina que voce tentou acessar</p>
      <h1>nao existe!</h1>
    </div>
  )
}
