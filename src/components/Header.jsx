"use client"
import React from 'react';
import Image from 'next/image';
import img from '../assets/images/logo.png';
import styles from '../styles/header.module.css';
import Link from 'next/link';

export default function Header() {
  const toogleMenuDisplay = () => {
    const body = document.body.clientWidth
    const menuContainer = document.querySelector('#menu-container');
    const logo = document.querySelector('#logo');
    const computedStyle = window.getComputedStyle(menuContainer);
   
    if (computedStyle.display === 'none' && body <= 775) {
      menuContainer.style.display = 'flex';
      logo.style.display = 'none'
    } else if (menuContainer.style.display = 'flex' && body > 775) {
      menuContainer.style.display = 'flex';
      logo.style.display = 'flex';
  }
}

  return (
    <>
    <div onClick={toogleMenuDisplay} className={styles.menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <header className={styles.container}>
      <div id='logo' className={styles.containerLogo}>
        <div className={styles.containerTitle}>
          <Link href='/'>
            <Image priority src={img} width='150' height='150' alt='' />
          </Link>
          <div>
            <p className={styles.professional}>Pisicóloga</p>
            <h2 className={styles.name}>Pamela Martins</h2>
            <p>Sua vida começa onde sua zona de conforto termina</p>
          </div>
        </div>
        <div className={styles.timeContainer}>
          <h4>Horário de atendimento</h4>
          <p>Segunda a Sexta: 14:00 - 17:00</p>
        </div>
      </div>
      <ul onClick={toogleMenuDisplay} id='menu-container' className={styles.containerNaviBar}>
        <li>
          <Link href='/'>início</Link>
        </li>
        <li>
          <Link href='/portfolio'>Portfólio</Link>
        </li>
        <li>
          <Link href='/recursos'>Recursos</Link>
        </li>
        <li>
          <Link href='/contato'>Contato</Link>
        </li>
      </ul>
    </header>
    </>
  );
}
