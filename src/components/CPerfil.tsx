import React from 'react';
import { Avatar, Grid, GridProps, Typography } from '@mui/material';
import { CParagraph } from './CParagraph';

import { TPessoa } from '../data';

import avatar from '../shared/assets/avatars/default-avatar.png';

export const CPerfil: React.FC<TPessoa & GridProps> = ({
    src = avatar,
    nome = 'Colaborador(a)',
    instituicao = 'Instituição',
    children,
    ...props
}) => {
    return (
        <Grid container item direction={'row'} alignItems={'center'} {...props}>
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
                        height: '100%'
                    }}
                />
            </Grid>
            <Grid xs={7} sm={4} md={6} item alignItems={'center'}>
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
