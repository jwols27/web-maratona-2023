import React from 'react';
import { Box, Grid } from '@mui/material';

import { FinalPrincipal } from './components/FinalPrincipal';
import {
    CBanner,
    CParagraph,
    CTextSlice,
    CTitle,
    FadeInSection
} from '../../../shared/components';
import { OrganizacaoGrafico } from './components/OrganizacaoGrafico';

import campus from '../../../shared/assets/campus.jpg';
import '../../../shared/styles/thumbnail.css';

export const SobreFinalTemplate = () => {
    return (
        <div id={'sobre-a-final'}>
            <FinalPrincipal />
            <FadeInSection>
                <Box width={'100%'}>
                    <CBanner
                        src={campus}
                        alt={'Câmpus'}
                        style={{
                            objectFit: 'cover',
                            height: '350px',
                            filter: 'grayscale(100%)'
                        }}
                    />
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Grid container direction={'row'}>
                    <Grid item xs={12} lg={6}>
                        <CTextSlice
                            px={{ xs: 4, md: 8, lg: 10, xl: 14 }}
                            noShadow
                            bgcolor={'primary.main'}
                        >
                            <CTitle
                                variant={'h3'}
                                textTransform={'uppercase'}
                                fontWeight={950}
                                contrastText
                            >
                                Organização
                            </CTitle>
                            <CParagraph contrastText>
                                A organização será realizada por um comitê
                                formado entre universidades, associação de
                                empresas e governo municipal.
                                <br />A coordenação será feita pela Universa do
                                Oeste de Santa Catarina (UNOESC) e contará com o
                                apoio da Universidade Comunitária da Região de
                                Chapecó (UNOCHAPECO), Universidade Federal da
                                Fronteira Sul (UFFS), Prefeitura de Chapecó,
                                Núcleo das empresas de Tecnologia Informação e
                                Comunicação (NTIC) e o Pólo Tecnológico do Oeste
                                Catarinense (DEATEC-ACATE).
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
                    <Grid
                        container
                        item
                        xs={12}
                        lg={6}
                        alignItems={'center'}
                        justifyContent={'center'}
                        position={'relative'}
                        borderColor={'tertiary.main'}
                        minHeight={{ xs: 500, lg: 440 }}
                    >
                        <OrganizacaoGrafico />
                    </Grid>
                </Grid>
            </FadeInSection>
        </div>
    );
};
