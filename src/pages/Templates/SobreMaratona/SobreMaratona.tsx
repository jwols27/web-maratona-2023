import React from 'react';
import { Box, Grid } from '@mui/material';
import {
    CLogoBox,
    CParagraph,
    CTextSlice,
    CTitle
} from '../../../shared/components';
import { logos } from '../data/logos';

export const SobreMaratona = () => {
    return (
        <Grid container direction={'row'}>
            <Grid item xs={12} md={6}>
                <CTextSlice
                    noShadow
                    bgcolor={'primary.main'}
                    px={{ xs: 4, md: 8 }}
                >
                    <CTitle
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                        contrastText
                    >
                        Sobre a maratona
                    </CTitle>
                    <CParagraph contrastText>
                        A Maratona de Programação é um evento da Sociedade
                        Brasileira de Computação que existe desde o ano de 1996.
                        A Maratona nasceu das competições regionais
                        classificatórias para as finais mundiais do concurso de
                        programação, o{' '}
                        <i>International Collegiate Programming Contest</i>, é
                        parte da regional sul-americana do concurso. Neste ano
                        ocorre a 28ª edição da Maratona.
                    </CParagraph>
                    <Box mt={3} height={{ xs: 400, md: 300 }} width={'100%'}>
                        <iframe
                            title={'maratona'}
                            height={'100%'}
                            width={'100%'}
                            src="https://www.youtube.com/embed/tgFBqtzW6Oc"
                        />
                    </Box>
                </CTextSlice>
            </Grid>
            <Grid item xs={12} md={6}>
                <CTextSlice noShadow px={{ xs: 4, md: 8 }}>
                    <CTitle
                        variant={'h4'}
                        fontWeight={600}
                        color={'tertiary.main'}
                    >
                        Objetivo
                    </CTitle>
                    <CParagraph mb={4}>
                        <b>
                            Ela se destina a alunos e alunas de cursos de
                            graduação e início de pós-graduação na área de
                            Computação e afins
                        </b>{' '}
                        (Engenharia de Software, Ciência da Computação,
                        Engenharia de Computação, Sistemas de Informação,
                        Matemática, etc.).
                        <br />A competição promove nos estudantes{' '}
                        <b>
                            a criatividade, a capacidade de trabalho em equipe,
                            a busca de novas soluções de software e a habilidade
                            de resolver problemas sob pressão.
                        </b>
                        <br />
                        De ano para ano temos observado que as instituições e
                        principalmente as grande empresas da área têm valorizado
                        os alunos que participam da Maratona.
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
    );
};
