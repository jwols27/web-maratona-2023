import React from 'react';
import { Box } from '@mui/material';
import { LogoMaratonaSBC } from '../../../shared/icons/LogoMaratonaSBC';

export const ProgramacaoTemplate = () => {
    return (
        <div id={'programacao'}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <LogoMaratonaSBC />
            </Box>
        </div>
    );
};
