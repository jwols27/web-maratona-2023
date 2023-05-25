import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { CParagraph } from '../../../../shared/components';

import avatar from '../../../../shared/assets/avatars/default-avatar.png';

export interface IPerfilProps {
    src?: string;
    nome?: string;
    instituicao?: string;
    children?: React.ReactNode;
}

export const Perfil: React.FC<IPerfilProps> = ({
    src = avatar,
    nome = 'Colaborador(a)',
    instituicao = 'Instituição',
    children
}) => {
    return (
        <Grid container item direction={'row'} alignItems={'center'}>
            <Grid
                item
                mr={{ xs: 2, md: 3 }}
                width={{ xs: 125, md: 150 }}
                height={{ xs: 125, md: 150 }}
            >
                <Avatar
                    src={src}
                    alt={nome}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography
                    color={'primary.main'}
                    variant={'h5'}
                    fontWeight={'bold'}
                >
                    {nome}
                </Typography>
                <CParagraph
                    color={'text.secondary'}
                    lineHeight={1.25}
                    fontWeight={500}
                >
                    ({instituicao})<br />
                    {children
                        ? children
                        : 'Cargo e outras informações do(a) colaborador(a)'}
                </CParagraph>
            </Grid>
        </Grid>
    );
};
