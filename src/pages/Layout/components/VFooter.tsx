import React from 'react';
import { Box, Paper } from '@mui/material';

interface IVFooterProps {
    children: React.ReactNode;
}

export const VFooter: React.FC<IVFooterProps> = ({ children }) => {
    return (
        <Box
            component={Paper}
            borderRadius={0}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            mt={6}
            sx={{ position: 'relative', width: '100%' }}
        >
            {children}
        </Box>
    );
};
