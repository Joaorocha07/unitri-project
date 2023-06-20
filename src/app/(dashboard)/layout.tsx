'use client';
import { Box, CardHeader, Container } from "@mui/material";

export default function DashboardLayout({
    children
} : IDashboardLayoutProps) : JSX.Element {
    return (
        <Container>
            <CardHeader />
            <Box>{children}</Box>
        </Container>
    )
}