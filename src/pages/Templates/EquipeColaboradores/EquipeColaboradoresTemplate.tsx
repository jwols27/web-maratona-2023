import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { CTitle } from '../../../shared/components';

import { Perfil } from './components/Perfil';
import { equipe } from '../data/equipe';

export const EquipeColaboradoresTemplate = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const limites = {
        // primeira coluna fica sempre com mais um no caso de tamanho ímpar
        fimDaColuna1: Math.ceil(equipe.length / 2),
        fimDaColuna2: equipe.length
    };

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
                    {equipe.slice(0, limites.fimDaColuna1).map((perfil) => (
                        <Perfil key={perfil.nome} {...perfil} />
                    ))}
                </Grid>
                <Grid container item xs={6} direction={'column'} spacing={4}>
                    {equipe
                        .slice(limites.fimDaColuna1, limites.fimDaColuna2)
                        .map((perfil) => (
                            <Perfil key={perfil.nome} {...perfil} />
                        ))}
                </Grid>
            </Grid>
        </Box>
    );
};
