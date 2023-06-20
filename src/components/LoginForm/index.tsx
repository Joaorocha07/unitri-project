'use client';
import styles from './../../styles/Login.module.css';

import { useState } from 'react';

import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { Input } from '../Input';
import { InputSenha } from '../InputSenha/InputSenha';

import * as Yup from 'yup';
import { signIn } from 'next-auth/react';

export default function LoginForm(): JSX.Element {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
                      
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);

    const router = useRouter();

    const initialValues = {
        userId: '',
        password: ''
    }
   
    const validationSchena = Yup.object().shape({
        userId: Yup.string().required('Campo obrigatorio'),
        password: Yup.string().required('Campo obrigatorio')
    })

    const handleSubmit = async ({
        userId,
        password
    } : ISignInValues): Promise<void> => {
        const response = await signIn('credentials', {
            userId,
            password,
            redirect: false
        })

        if(response?.error !== null) {
            setError(true);
            setErrorMessage(true);
        } else {
            router.replace('/');
        }
    }

    return (
        <Grid 
            item xs={12} sm={6} md={6} lg={6}
            className={styles.main_container}
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundImage: `url('/images/students-escura.jpeg')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <Box
                className={styles.form_container}
                sx={{
                    width: "30%",
                    height: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: 'white',
                }}>
                <Box
                    className={styles.logo_assoec}
                    sx={{
                        margin: '0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '.5em',
                        marginBottom: '.5em',
                       
                    }}>
                        <Image 
                            src="/images/asoec.svg"
                            width={130}
                            height={130}
                            alt='teste'
                        />
                </Box>
                <Box    
                    className={styles.form_container_parte_de_dentro}
                    sx={{
                        width: "80%",
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                    <Typography 
                        className={styles.titulo}
                        variant="h1" 
                        sx={{ 
                            width: "100%",
                            fontSize: '35px',
                            marginBottom: '10px', 
                            textAlign: 'left', 
                            fontFamily: 'Roboto, sans-serif' 
                        }}>
                        Bem-vindo à ASOEC!
                    </Typography>
                    <Typography 
                        className={styles.paragrafo}
                        variant="body1" 
                        sx={{ 
                            textAlign: 'justify', 
                            fontFamily: 'Roboto, sans-serif', 
                            marginBottom: '30px',
                            width: "100%",
                        }}>
                            Somos um grupo de instituições de ensino, incluindo a Universo, Unitri e Colégio Dom Helder. Acesse suas informações
                            e explore nossas ferramentas para uma jornada acadêmica eficiente.
                    </Typography>
                    <div className={styles.textfield}>
                        <Input
                            error={error}
                            type="number" 
                            label="Código de usuário"
                            value={userId}
                            onChange={(event) => setUserId(event.target.value)}
                        />
                    </div>
                    <div className={styles.textfield}>
                        <InputSenha 
                            error={error}
                            label="Senha"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        {errorMessage}         
                        <Typography
                            variant='body1'
                            sx={{
                                marginTop: "16px",
                                width: "100%",
                                textAlign: "end"
                            }}>
                            Esqueceu seus dados?
                            <Link 
                                href="/"
                                className={styles.text}
                            >
                                Clique aqui
                            </Link>
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={{
                                marginTop: "16px",
                                width: "100%",
                                textAlign: "start",
                            }}>
                            <Checkbox sx={{ alignItems: 'center' }} {...label} />
                            Manter conectado
                        </Typography>
                    </div>
                    <div className={styles.textfield}>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "20px",
                                backgroundColor: '#273e74',
                                '&:hover': {
                                    backgroundColor: '#273e74da',
                                },
                            }}>
                            Entrar
                        </Button>
                        <Typography
                            variant='body1'
                            className={styles.primeiro_acesso}
                            sx={{
                                margin: "auto 0",
                            }}>
                                Primeiro acesso?
                        </Typography>
                        <Link href='/' className={styles.text}>Cria sua senha aqui</Link>
                    </div>
                    <Typography
                        className={styles.grupo_asoec}
                        sx={{
                            fontFamily: 'Robot, sans-serif',
                            fontSize: '14px',
                            marginTop: '23px',
                            marginBottom: '0px',
                        }}>
                        Grupo ASOEC
                    </Typography>
                    <Box
                        className={styles.images}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: "100%",
                            marginTop: "auto",
                            marginBottom: "20px",
                            padding: "5px",
                        }}>
                        <Image 
                            src="/images/unitri.svg"
                            width={120}
                            height={100}
                            alt='unitri'
                            style={{
                                width: "80px",
                                height: "60px",
                                flex: "33%"
                              }}
                        />
                        <Image 
                            src="/images/dom-helder.svg"
                            width={50}
                            height={100}
                            alt='helder'
                            style={{
                                width: "60px",
                                height: "60px",
                                flex: "33%"
                              }}
                        />
                        <Image 
                            src="/images/universo.svg"
                            width={120}
                            height={100}
                            alt='universo'
                            style={{
                                width: "80px",
                                height: "60px",
                                flex: "33%"
                              }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                className={styles.parte_dois_container}
                sx={{
                    width: "60%", 
                    height: "90vh",
                    backgroundImage: `url('/images/students.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </Box>
        </Grid>
    )
}