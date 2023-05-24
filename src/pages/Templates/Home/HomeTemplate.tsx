import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import {
    CLogoBox,
    CParagraph,
    CTextSlice,
    CTitle,
    FadeInSection
} from '../../../shared/components';
import { CronogramaResumido } from './components';
import { logos } from '../data/logos';
import { FinalPrincipal } from '../SobreFinal/components/FinalPrincipal';

import './cronograma.css';

export const HomeTemplate = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const responsiveness = React.useMemo(() => {
        if (smDown) return 'h6';
        if (mdDown) return 'h4';
        return 'h3';
    }, [mdDown, smDown]);

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
                            <Box
                                mt={3}
                                height={{ xs: 400, md: 300 }}
                                width={'100%'}
                            >
                                <iframe
                                    title={'maratona'}
                                    height={'100%'}
                                    width={'100%'}
                                    src="https://www.youtube.com/embed/XyLn3g4RB8Y"
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
                            <Box display={'flex'} flexDirection={'row'}>
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
                            <Grid container direction={'row'}>
                                <CLogoBox
                                    xs={5.5}
                                    logos={logos.slice(0, 2)}
                                    borderColor={'tertiary.main'}
                                    itemsPerRow={2}
                                />
                                <Grid item xs={0.5} />
                                <CLogoBox
                                    xs={5.5}
                                    logos={logos.slice(2, 4)}
                                    borderColor={'tertiary.main'}
                                    itemsPerRow={2}
                                />
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
                            variant={responsiveness}
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
            <FadeInSection>
                <FinalPrincipal />
            </FadeInSection>
        </div>
    );
};
