import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import {
    CParagraph,
    CTextSlice,
    CTitle,
    FadeInSection
} from '../../../shared/components';
import { CronogramaResumido } from './components';
import logoSBC from '../../../shared/assets/logos/logo-sbc.png';
import logo45 from '../../../shared/assets/logos/logo-sbc45.png';
import unoesc from '../../../shared/assets/logos/logo-unoesc-colorida.png';
import pontoZero from '../../../shared/assets/logos/logo-ponto_zero.png';
export const HomeTemplate = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div id={'home'}>
            <FadeInSection>
                <Grid container direction={'row'}>
                    <Grid item xs={12} md={6}>
                        <CTextSlice noShadow bgcolor={'primary.main'} px={8}>
                            <CTitle
                                variant={'h3'}
                                textTransform={'uppercase'}
                                fontWeight={950}
                                contrastText
                            >
                                Sobre a maratona
                            </CTitle>
                            <CParagraph useContrastText>
                                A Maratona de Programação é um evento da
                                Sociedade Brasileira de Computação que existe
                                desde o ano de 1996. A Maratona nasceu das
                                competições regionais classificatórias para as
                                finais mundiais do concurso de programação, o{' '}
                                <i>
                                    International Collegiate Programming Contest
                                </i>
                                , é parte da regional sul-americana do concurso.
                                Neste ano ocorre a 28ª edição da Maratona.
                            </CParagraph>
                            <Box mt={3} height={300} width={'100%'}>
                                <iframe
                                    title={'maratona'}
                                    height={'100%'}
                                    width={'100%'}
                                    src="https://www.youtube.com/embed/VgDgWzBL7s4"
                                />
                            </Box>
                        </CTextSlice>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CTextSlice noShadow px={8}>
                            <CTitle
                                variant={'h4'}
                                fontWeight={600}
                                color={'tertiary.main'}
                            >
                                Objetivo
                            </CTitle>
                            <CParagraph mb={4}>
                                <b>
                                    Ela se destina a alunos e alunas de cursos
                                    de graduação e início de pós-graduação na
                                    área de Computação e afins
                                </b>{' '}
                                (Engenharia de Software, Ciência da Computação,
                                Engenharia de Computação, Sistemas de
                                Informação, Matemática, etc.).
                                <br />A competição promove nos estudantes{' '}
                                <b>
                                    a criatividade, a capacidade de trabalho em
                                    equipe, a busca de novas soluções de
                                    software e a habilidade de resolver
                                    problemas sob pressão.
                                </b>
                                <br />
                                De ano para ano temos observado que as
                                instituições e principalmente as grande empresas
                                da área têm valorizado os alunos que participam
                                da Maratona.
                            </CParagraph>
                            <Box
                                display={'flex'}
                                flexDirection={'row'}
                                width={'100%'}
                            >
                                <CTitle
                                    variant={'h5'}
                                    fontWeight={600}
                                    color={'tertiary.main'}
                                    width={'50%'}
                                >
                                    Realização
                                </CTitle>
                                <CTitle
                                    variant={'h5'}
                                    fontWeight={600}
                                    color={'tertiary.main'}
                                    width={'50%'}
                                >
                                    Organização
                                </CTitle>
                            </Box>
                            <Grid
                                container
                                direction={'row'}
                                justifyContent={'start'}
                            >
                                <Grid
                                    xs={5.5}
                                    item
                                    container
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    direction={'column'}
                                    border={2}
                                    borderColor={'tertiary.main'}
                                    px={4}
                                >
                                    <Grid
                                        xs={12}
                                        width={'40%'}
                                        item
                                        display={'flex'}
                                    >
                                        <img
                                            src={logoSBC}
                                            alt={'SBC'}
                                            style={{
                                                objectFit: 'contain',
                                                maxWidth: '100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid width={'10%'} />
                                    <Grid
                                        xs={12}
                                        width={'40%'}
                                        item
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                    >
                                        <img
                                            src={logo45}
                                            alt={'SBC 45 anos'}
                                            style={{
                                                objectFit: 'contain',
                                                maxWidth: '100%'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid xs={0.5} item />
                                <Grid
                                    xs={5.5}
                                    item
                                    container
                                    direction={'column'}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    border={2}
                                    borderColor={'tertiary.main'}
                                    px={4}
                                >
                                    <Grid
                                        item
                                        xs={12}
                                        width={'42%'}
                                        display={'flex'}
                                    >
                                        <img
                                            src={unoesc}
                                            alt={'UNOESC'}
                                            style={{
                                                objectFit: 'contain',
                                                maxWidth: '100%'
                                            }}
                                        />
                                    </Grid>
                                    <Grid width={'10%'} />
                                    <Grid
                                        item
                                        xs={12}
                                        width={'42%'}
                                        display={'flex'}
                                    >
                                        <img
                                            src={pontoZero}
                                            alt={'Ponto Zero'}
                                            style={{
                                                objectFit: 'contain',
                                                maxWidth: '100%'
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CTextSlice>
                    </Grid>
                </Grid>
            </FadeInSection>

            <FadeInSection>
                <Grid
                    container
                    mt={4}
                    borderColor={theme.palette.tertiary.main}
                    mr={{
                        xs: 0,
                        xl: theme.spacing(-10),
                        xxl: theme.spacing(-15)
                    }}
                    ml={{
                        xs: 0,
                        xl: theme.spacing(-10),
                        xxl: theme.spacing(-15)
                    }}
                    width={{
                        xs: '100%',
                        xl: `calc(100% + ${theme.spacing(20)})`,
                        xxl: `calc(100% + ${theme.spacing(30)})`
                    }}
                >
                    <Grid item xs={1.5} sx={{ borderColor: 'inherit' }}>
                        <div className={'programacao-box'} />
                        <div className={'programacao-box prog-1'} />
                    </Grid>
                    <Grid item xs={1.5} sx={{ borderColor: 'inherit' }}>
                        <div className={'programacao-box'} />
                        <div className={'programacao-box prog-2'} />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className={'prog-main'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        p={{ xs: 2, sm: 4 }}
                    >
                        <CTitle
                            textTransform={'uppercase'}
                            variant={mdDown ? (smDown ? 'h6' : 'h4') : 'h3'}
                            fontWeight={950}
                            titleColor={'primary'}
                            mb={0}
                        >
                            Programação
                        </CTitle>
                    </Grid>
                    <Grid item xs={1.5} sx={{ borderColor: 'inherit' }}>
                        <div
                            className={'programacao-box prog-1'}
                            style={{ borderColor: theme.palette.tertiary.main }}
                        />
                        <div className={'programacao-box'} />
                    </Grid>
                    <Grid item xs={1.5} sx={{ borderColor: 'inherit' }}>
                        <div
                            className={'programacao-box prog-2'}
                            style={{ borderColor: theme.palette.tertiary.main }}
                        />
                        <div className={'programacao-box'} />
                    </Grid>
                </Grid>
            </FadeInSection>
            <FadeInSection>
                <CronogramaResumido />
            </FadeInSection>
        </div>
    );
};
