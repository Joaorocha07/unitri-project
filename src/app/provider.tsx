'use client';

import { ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import theme from '@/theme';

interface IPoviderProps {
    children: ReactNode
}

function Provider({ children } : IPoviderProps) : JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
    )
}

export default Provider;