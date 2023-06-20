import { Montserrat, Lato } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif']
})

export const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['arial']
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D0DFF'
    },
    secondary: {
      main: '#FFCE19'
    },
    error: {
      main: '#FF0D0D'
    }
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontFamily: montserrat.style.fontFamily
    },
    h2: {
      fontWeight: 700,
      fontFamily: montserrat.style.fontFamily
    },
    h3: {
      fontWeight: 700,
      fontFamily: montserrat.style.fontFamily
    },
    h4: {
      fontWeight: 700,
      fontFamily: montserrat.style.fontFamily
    },
    h5: {
      fontWeight: 700,
      fontFamily: montserrat.style.fontFamily
    },
    subtitle1: {
      fontWeight: 400,
      fontFamily: montserrat.style.fontFamily
    },
    subtitle2: {
      fontWeight: 100,
      fontFamily: montserrat.style.fontFamily
    },
    body1: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 700,
      color: '#000000'
    },
    body2: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 700,
      color: '#000000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0',
          fontWeight: '700',
          '&.MuiButton-contained': {
            '&.Mui-disabled': {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            }
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: '3px',
            borderColor: '#000',
            borderRadius: '0'
          },

          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderWidth: '3px'
            }
          }
        }
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: '#000'
          }
        }
      }
    }
  }
})

export default theme
