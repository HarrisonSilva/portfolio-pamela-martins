import React from 'react'
import Image from 'next/image'
import photo from '../../assets/images/pamela.jpg'
import styles from '../../styles/portfolio.module.css'

export default function page() {
  return (
    <div>
        <div className={styles.container}>
          <Image className={styles.img} src={photo} width='330' height='350' alt='foto da pamela' />
          <div className={styles.containerAbout}>
            <h1>Psicóloga Pamela Martins</h1>
            <h4>Especialista em Psicoterapia CRP 00/0000</h4>
          <p>Sou graduada encontro-me no 5° <br />
             periodo do curso de Psicologia <br />
             e atuo na area de treinamento <br />
             e desenvolvimento no setor de RH</p>
          </div>
        </div>
        <h1 style={{display: 'none'}}>Formação Acadêmica</h1>
    </div>
  )
}
