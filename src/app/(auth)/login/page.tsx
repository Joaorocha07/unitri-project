'use client';
import styles from '../../../styles/Login.module.css';
import React, { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Grid, Box, Typography, Button, Checkbox } from '@mui/material';

import { Input } from '@/components/Input';
import { InputSenha } from '@/components/InputSenha/InputSenha';

import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    // const { data: session  } = useSession()
    // console.log(session);
           
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
                      
    const [codUser, setCodUser] = useState('');
    const [senha, setSenha] = useState('');
    const [codUserError, setCodUserError] = useState(false);
    const [senhaError, setSenhaError] = useState(false);
                         
    return (
        <Grid 
            //item xs={12} sm={6} md={6} lg={6}
            className={styles.main_container}
            sx={{
                // position: 'relative',
                // display: 'grid',
                // minHeight: '100vh',
                // padding: '1em',
                // gridTemplateColumns: '1fr 1fr',
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
                    // display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    // textAlign: 'center',
                    // padding: '20px',
                    // height: '85vh',
                    // width: '50vh',
                    // maxWidth: '90%',
                    // boxShadow: '5px 5px 10px 10px rgba(0, 0, 0, 0.5)',
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
                        <Typography
                            variant='body1'
                            sx={{
                                // textAlign: 'right',
                                // fontSize: '16px',
                                // fontFamily: 'Roboto, sans-serif',
                                // marginTop: '5px', 
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
                            onClick={() => signIn()}
                            sx={{
                                width: "100%",
                                // height: "36px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "20px",
                                // textTransform: 'uppercase',
                                // padding: '10px',
                                // fontWeight: 'bold',
                                // letterSpacing: '2px',
                                backgroundColor: '#273e74',
                                // color: 'white',
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
                                // fontSize: '16px',
                                // fontFamily: 'Roboto, sans-serif',
                                // marginTop: '25px',
                                // marginBottom: '3px',
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
                                // backgroundColor: "gray",
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
                                // backgroundColor: "gray",
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
                                // backgroundColor: "gray",
                                flex: "33%"
                              }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                className={styles.parte_dois_container}
                sx={{
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // height: '95.6vh',
                    // width: '141vh',
                    // padding: '20px',
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