"use client"
import React, { useEffect } from 'react';
import styles from '../styles/form.module.css';
import { useState } from 'react';

export default function Form() {
  const [data, setData] = useState({ nome: '', mensagem: '' });
  const [disabled, setDisabled] = useState(true);
  const [displayForm, setDisplayForm] = useState(true);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    const defaultMessage = `https://wa.me/5521982905346?text=Ola%20meu%20Nome%20e%20${
      data.nome
    }%20`;
    const newMessage = defaultMessage + data.mensagem;
    setData((prevData) => ({
      ...prevData,
      mensagem: newMessage,
    }));
    setDisplayForm(false);
    window.open(newMessage, '_blank').focus();
  };

  useEffect(() => {
    const getBtn = document.querySelector('#btnForm');
    const { nome, mensagem } = data;
    setDisabled(!(nome.length !== 0 && mensagem.length !== 0));
    if (nome && mensagem && getBtn) {
      getBtn.style.backgroundColor = 'blue';
    }
    if (nome.length === 0 || mensagem.length === 0) {
        getBtn.style.backgroundColor = 'rgba(0, 0, 255, 0.200)'
    }
  }, [data]);
  
  return (
    <div>
      {displayForm ? (
        <form className={styles.form}>
          <h2>Entre em Contato</h2>
          <input
            name="nome"
            onChange={handleChange}
            maxLength={30}
            type="text"
            placeholder="nome"
          />
          <textarea
            name="mensagem"
            onChange={handleChange}
            maxLength={200}
            id=""
            cols="40"
            rows="5"
            placeholder="digite sua mensagem aqui.."
          ></textarea>
          <button id="btnForm" disabled={disabled} onClick={handleClick}>
            Enviar
          </button>
        </form>
      ) : (
        <h4 className={styles.titleSucess}>Vocé foi redirecionado para o Whatsapp</h4>
      )}
    </div>
  );
}
