'use client';
import Button from '@mui/material/Button';

interface InputProps {
    children: string,
    onClick: void,
}

export function CustomButton({ children, onClick } : InputProps) {
    return (
        <Button 
            variant="contained"
        >
            {children}
        </Button>
    )
}