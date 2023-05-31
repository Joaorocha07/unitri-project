'use client';
import { FormControl } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputProps {
    error: boolean,
    type: string,
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({error, type, label, value, onChange}: InputProps) {
    return (
        <Box>
            <FormControl sx={{width: '100%'}} variant='outlined'>
                <TextField 
                    id="outlined-basic"
                    error={error}
                    type={type} 
                    label={label} 
                    value={value}
                    onChange={onChange} 
                />
            </FormControl>
        </Box>
    )
}