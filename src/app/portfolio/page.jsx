import React from 'react'
import Image from 'next/image'
import photo from '../../assets/images/pamela.jpg'
import styles from '../../styles/portfolio.module.css'

export default function page() {
  return (
    <div>
        <div className={styles.container}>
          <Image src={photo} width='330' height='350' alt='foto da pamela' />
          <p>Sou graduanda encontro-me no 5° <br />
             periodo do curso de Psicologia <br />
             e atuo na area de treinamento <br />
             e desenvolvimento no setor de RH</p>
        </div>
    </div>
  )
}
