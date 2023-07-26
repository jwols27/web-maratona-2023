import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { AcomTurBalloon } from './components/AcomTurBalloon';
import { CDescCard, CParagraph, CTitle, TBalloon } from '../../../components';

import hotelLang from '../../../shared/assets/hotel/hotel-lang.webp';
import hotelMogano from '../../../shared/assets/hotel/hotel-mogano.jpg';

const mogano: TBalloon = {
    size: 200,
    offset: '12px',
    color: 'gray',
    children: (
        <img
            src={hotelMogano}
            alt={'icon'}
            className={'balloon-content-full'}
        />
    )
};
const lang: TBalloon = {
    size: 200,
    offset: '12px',
    color: 'gray',
    children: (
        <img src={hotelLang} alt={'icon'} className={'balloon-content-full'} />
    )
};

export const AcomodacoesTurismo = () => {
    return (
        <Grid container>
            <Grid
                item
                xs={12}
                md={6}
                bgcolor={'primary.main'}
                py={8}
                pl={{ xs: 4, md: 6, lg: 10, xl: 14 }}
                pr={{ xs: 4, md: 2 }}
            >
                <CTitle
                    variant={'h3'}
                    textTransform={'uppercase'}
                    fontWeight={950}
                    titleColor={'secondary'}
                    contrastText
                    mb={6}
                >
                    Acomodações e Turismo
                </CTitle>
                <CTitle variant={'h4'} fontWeight={700} titleColor={'tertiary'}>
                    Conheça Chapecó
                </CTitle>
                <CParagraph
                    className={'special-link'}
                    component={'p'}
                    borderColor={'tertiary.main'}
                    contrastText
                    width={{ xs: '90%', sm: '80%', md: '70%' }}
                    mb={4}
                >
                    Acesse o site da Prefeitura de Chapecó para conhecer os
                    pontos turísticos da Capital do Oeste Catarinense:
                    <br />
                    <a
                        href={'https://chapeco.sc.gov.br/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        style={{ paddingBottom: 4 }}
                    >
                        chapeco.sc.gov.br
                    </a>
                </CParagraph>
                <Box
                    width={{ xs: 'calc(100% + 64px)', sm: '100%', md: '80%' }}
                    height={{ xs: 450, md: 250 }}
                    ml={{ xs: -4, sm: 0 }}
                >
                    <iframe
                        src={
                            'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36850.47756757405!2d-52.6469510331741!3d-27.094850164276373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e4b5d763b81187%3A0x39191b9f478f776!2sHotel%20Lang%20Palace!5e0!3m2!1spt-BR!2sbr!4v1684954164903!5m2!1spt-BR!2sbr'
                        }
                        title={'Mapa de Chapecó'}
                        width={'100%'}
                        height={'100%'}
                        loading={'lazy'}
                        referrerPolicy={'no-referrer-when-downgrade'}
                    />
                </Box>
            </Grid>
            <Grid
                item
                container
                xs={12}
                md={6}
                bgcolor={'tertiary.main'}
                pb={8}
                pt={{ xs: 8, md: 12 }}
                px={{ xs: 0, sm: 4, md: 2, lg: 4, xl: 6 }}
            >
                <Grid
                    container
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="space-evenly"
                >
                    <Grid
                        container
                        item
                        xs={5.5}
                        direction={'column'}
                        mb={{ xs: 4, md: 0 }}
                    >
                        <AcomTurBalloon balloon={mogano} />
                        <CDescCard
                            header={
                                <Typography
                                    align={'center'}
                                    width={'100%'}
                                    fontStyle={'italic'}
                                    fontWeight={600}
                                >
                                    Hotel Mogano Business
                                </Typography>
                            }
                            headerColor={'primary.main'}
                            borderColor={'black'}
                            borderWidth={2}
                            align={'center'}
                            lineHeight={1.75}
                        >
                            Avenida Getúlio Vargas, 1372-N, Centro
                            <br />
                            Chapecó-SC, CEP 89801-000, Brasil
                        </CDescCard>
                    </Grid>

                    <Grid container item xs={5.5} direction={'column'}>
                        <AcomTurBalloon balloon={lang} />
                        <CDescCard
                            header={
                                <Typography
                                    align={'center'}
                                    width={'100%'}
                                    fontStyle={'italic'}
                                    fontWeight={600}
                                >
                                    Hotel Lang Palace
                                </Typography>
                            }
                            headerColor={'primary.main'}
                            borderColor={'black'}
                            borderWidth={2}
                            align={'center'}
                            lineHeight={1.75}
                        >
                            Rua Sete de Setembro, 150 D, Centro
                            <br />
                            Chapecó-SC, CEP 89801-000, Brasil
                        </CDescCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
