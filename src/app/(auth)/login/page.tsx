'use client';
import React, { useState } from 'react';

import styles from '../../../styles/Login.module.css';
import Image from 'next/image';

import { Input } from "@/components/Input";
import { InputSenha } from "@/components/InputSenha/InputSenha";

export default function Login() {
    const [codUser, setCodUser] = useState('');
    const [senha, setSenha] = useState('');
    const [codUserError, setCodUserError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
    
    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        
        let hasError = false;

        if (!codUser) {
            setCodUserError(true);
            hasError = true;
        } else {
            setSenhaError(false);
        }

        if (!senha) {
            setSenhaError(true)
            hasError = true;
        } else {
            setSenhaError(false);
        }

        if (hasError) {
            return;
        }
        
        const resposta = await fetch('https://acl-hmg.prod.unitri.edu.br/login');

        console.log(resposta, codUser, senha);
    }

    return (
        <div className={styles.container}>
            <form className={styles.form_login}>
                <div className={styles.logo_assoec}>
                        <Image 
                            src="/images/asoec.svg"
                            width={150}
                            height={150}
                            alt='teste'
                        />
                </div>
                <div className={styles.card}>
                    <h1>Bem-vindo à ASOEC!</h1>
                    <p>
                        Somos um grupo de instituições de ensino, incluindo a Universo,
                        Unitri e Colégio Dom Helder. Acesse suas informações e explore
                        nossas ferramentas para uma jornada acadêmica eficiente.
                    </p>
                    <div className={styles.textfield}>
                        <Input
                            error={codUserError}
                            type="number" 
                            label="Código de usuário"
                            value={codUser}
                            onChange={(event) => setCodUser(event.target.value)}
                        />
                    </div>
                    <div className={styles.textfield}>
                        <InputSenha 
                            error={senhaError}
                            label="Senha"
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                        />
                    </div>
                    <div className={styles.textfield}>
                        <button 
                            className={styles.btn_login}
                            onClick={handleSubmit}
                        >
                            entrar
                        </button>
                    </div>
                </div>
            </form>
            <div className={styles.area_segunda_parte}></div>
        </div>
    )
}