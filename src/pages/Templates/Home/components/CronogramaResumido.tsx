import React from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import { CronogramaDia } from './CronogramaDia';
import { TBalloon } from '../../../../shared/components';
import mala from '../../../../shared/assets/icons/icon-mala.png';
import camera from '../../../../shared/assets/icons/icon-camera.png';
import baloes from '../../../../shared/assets/icons/icon-balloons.png';
import aviao from '../../../../shared/assets/icons/icon-plane.png';
export const CronogramaResumido = () => {
    const theme = useTheme();
    const balloon1: TBalloon = {
        size: 100,
        offset: theme.spacing(3),
        color: theme.palette.secondary.main,
        children: <img src={mala} alt={'icon'} className={'balloon-content'} />
    };
    const balloon2: TBalloon = {
        size: 100,
        offset: theme.spacing(3),
        color: theme.palette.secondary.main,
        children: (
            <img src={camera} alt={'icon'} className={'balloon-content'} />
        )
    };
    const balloon3: TBalloon = {
        size: 100,
        offset: theme.spacing(3),
        color: theme.palette.secondary.main,
        children: (
            <img src={baloes} alt={'icon'} className={'balloon-content'} />
        )
    };
    const balloon4: TBalloon = {
        size: 100,
        offset: theme.spacing(3),
        color: theme.palette.secondary.main,
        children: <img src={aviao} alt={'icon'} className={'balloon-content'} />
    };
    return (
        <Box
            width={'100%'}
            px={{ xs: 0, sm: 4 }}
            pt={{ xs: 2, md: 13 }}
            pb={{ xs: 4, md: 10 }}
            mt={{ xs: 8, md: 12 }}
            bgcolor={'primary.main'}
        >
            <Grid container direction={{ xs: 'column', md: 'row' }}>
                <CronogramaDia
                    headerColor={theme.palette.tertiary.main}
                    borderColor={theme.palette.tertiary.main}
                    header={{ date: '19/10', weekDay: 'Quinta-feira' }}
                    balloon={balloon1}
                >
                    Check-in dos finalistas nos hotéis Lang e Mogano Business;
                    <br />
                    <br />
                    Jantar de recepção e boas-vindas
                </CronogramaDia>
                <CronogramaDia
                    headerColor={theme.palette.secondary.main}
                    borderColor={theme.palette.tertiary.main}
                    header={{ date: '20/10', weekDay: 'Sexta-feira' }}
                    balloon={balloon2}
                >
                    Cerimônia de abertura e palestras de patrocinadores;
                    <br />
                    <br />
                    Sessão de aquecimento da competição;
                    <br />
                    <br />
                    Passeio turístico com os finalistas e foto oficial - Arena
                    Condá.
                </CronogramaDia>
                <CronogramaDia
                    headerColor={theme.palette.tertiary.main}
                    borderColor={theme.palette.tertiary.main}
                    header={{ date: '21/10', weekDay: 'Sábado' }}
                    balloon={balloon3}
                >
                    Manhã livre, com espaço para mini palestras e reuniões;
                    <br />
                    <br />
                    Competição (14h às 19h) (horário de Brasília sujeito a
                    alteração);
                    <br />
                    <br />
                    Jantar de integração.
                </CronogramaDia>
                <CronogramaDia
                    headerColor={theme.palette.secondary.main}
                    borderColor={theme.palette.tertiary.main}
                    header={{ date: '22/10', weekDay: 'Domingo' }}
                    balloon={balloon4}
                >
                    Check-out e viagem de retorno dos competidores.
                </CronogramaDia>
            </Grid>
        </Box>
    );
};
