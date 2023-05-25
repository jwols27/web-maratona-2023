import React from 'react';

import '../../../shared/styles/thumbnail.css';
import { FinalPrincipal } from './components/FinalPrincipal';
import {
    CBanner,
    CParagraph,
    CTextSlice,
    CTitle,
    FadeInSection
} from '../../../shared/components';

import campus from '../../../shared/assets/campus.jpg';
import { Grid, useTheme } from '@mui/material';
import { OrganizacaoGrafico } from './components/OrganizacaoGrafico';

export const SobreFinalTemplate = () => {
    const theme = useTheme();
    return (
        <div id={'sobre-a-final'}>
            <FinalPrincipal />
            <CBanner
                src={campus}
                alt={'Câmpus'}
                style={{
                    objectFit: 'cover',
                    height: '350px',
                    filter: 'grayscale(100%)'
                }}
            />
            <FadeInSection>
                <Grid container direction={'row'}>
                    <Grid item xs={12} lg={6}>
                        <CTextSlice
                            px={{ xs: 4, md: 8, lg: 10, xl: 14 }}
                            noShadow
                        >
                            <CTitle
                                variant={'h3'}
                                textTransform={'uppercase'}
                                fontWeight={950}
                                color={'secondary.main'}
                            >
                                Organização
                            </CTitle>
                            <CParagraph>
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
                        </CTextSlice>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={6}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        position={'relative'}
                        borderColor={theme.palette.tertiary.main}
                        minHeight={{ xs: 500, lg: 440 }}
                    >
                        <OrganizacaoGrafico />
                    </Grid>
                </Grid>
            </FadeInSection>
        </div>
    );
};
