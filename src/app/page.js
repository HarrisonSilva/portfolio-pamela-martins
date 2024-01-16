import React from 'react'
import Image from 'next/image'
import tr1 from '../assets/images/tr1.png'
import tr2 from '../assets/images/tr2.png'
import styles from '../styles/home.module.css'

export default function page() {
  return (
    <div className={styles.container}>
      <div className={styles.cardBox}>
        <Image className={styles.tr1} src={tr1} width='600' height='350' alt=''/>
        <div className={styles.containerCard}>
          <h1>Como o TCC pode te ajudar?</h1>
          <p>A TCC é uma abordagem bem pedagógica <br/>
            vai te ensinar a reconhecer os seus <br/>
            pensamentos, emoções e comportamentos <br/>
            que geram problemas em sua vida e que <br/>
            estão mantendo os resultados <br/>
            insatisfatórios.</p>
        </div>
      </div>
        <div className={styles.cardBoxTwo}>
          <h1>Porque fazer Terapia Cognitiva Comportamental?</h1>
        <p>
        Tem efeito duradouro e preventivo, prevenindo recaídas de alguns transtornos, como depressão e ansiedade
        </p>
        <Image className={styles.tr1} src={tr2} width='1000' height='500' alt=''/>
        </div>
        <div className={styles.containerMaps}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d229.90206172655002!2d-43.30987608498765!3d-22.786414589838813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1705358428766!5m2!1spt-BR!2sbr" width="1000" height="450" loading="lazy" ></iframe>
        </div>
    </div>
  )
}
