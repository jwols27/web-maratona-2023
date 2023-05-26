import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CTitle } from '../../../shared/components';

import { Perfil } from './components/Perfil';
import { equipe } from '../data/equipe';

export const EquipeColaboradoresTemplate = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box bgcolor={'tertiary.main'} p={{ xs: 4, md: 8 }}>
            <CTitle
                variant={'h3'}
                textTransform={'uppercase'}
                fontWeight={950}
                contrastText
                mb={4}
                align={mdDown ? 'center' : undefined}
            >
                Equipe e Colaboradores
            </CTitle>
            <Grid container direction={{ xs: 'column', md: 'row' }} spacing={4}>
                <Grid container item xs={6} direction={'column'} spacing={4}>
                    {equipe.slice(0, 4).map((perfil) => (
                        <Perfil key={perfil.nome} {...perfil} />
                    ))}
                </Grid>
                <Grid container item xs={6} direction={'column'} spacing={4}>
                    {equipe.slice(4, 8).map((perfil) => (
                        <Perfil key={perfil.nome} {...perfil} />
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};
