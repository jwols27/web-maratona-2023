import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export const LoadingFallback = () => {
    return (
        <Box
            bgcolor={'tertiary.main'}
            display={'flex'}
            height={'100vh'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <CircularProgress color={'primary'} size={64} />
        </Box>
    );
};
