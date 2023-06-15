import { Box, Grid, useTheme } from '@mui/material';
import { CParagraph, CTitle } from '../../../../shared/components';
import React from 'react';

export const FormeSeuTime = () => {
    const theme = useTheme();
    return (
        <Grid item xs={12} md={5.5}>
            <Box
                width={{
                    xs: '80%',
                    md: '100%',
                    xl: `calc(100% + ${theme.spacing(10)})`,
                    xxl: `calc(100% + ${theme.spacing(15)})`
                }}
                ml={{ xs: 0, xl: -10, xxl: -15 }}
                py={1}
                pl={{ xs: 2, sm: 8, xl: 18, xxl: 23 }}
                bgcolor={'secondary.main'}
            >
                <CTitle
                    contrastText
                    variant={'h3'}
                    fontWeight={700}
                    mb={0}
                    pr={4}
                >
                    Forme seu time!
                </CTitle>
            </Box>
            <Box width={'90%'} px={{ xs: 2, sm: 8 }}>
                <CParagraph
                    component={'p'}
                    variant={'h6'}
                    color={'primary.main'}
                    fontWeight={600}
                    lineHeight={1.25}
                    mt={1}
                    mb={5}
                >
                    Cada time precisa de 1 coach,
                    <br />3 integrantes e poderá ter 1 reserva.
                </CParagraph>
                <CTitle
                    titleColor={'tertiary'}
                    variant={'h4'}
                    fontWeight={'bold'}
                >
                    Inscrições
                </CTitle>
                <CParagraph borderColor={'tertiary.main'}>
                    O representante do time (coach) deverá realizar as
                    inscrições até dia <b>15/08/2023</b>.<br />
                    Ele deverá:
                    <ol className={'custom-list special-link'}>
                        <li>
                            preencher as informações dos times{' '}
                            <a
                                href={'https://icpc.global/'}
                                target={'_blank'}
                                rel={'noreferrer'}
                            >
                                no site do ICPC
                            </a>
                        </li>
                        <li>
                            providenciar o pagamento da inscrição{' '}
                            <a
                                href={
                                    'https://centraldesistemas.sbc.org.br/ecos/maratonasbc2023/'
                                }
                                target={'_blank'}
                                rel={'noreferrer'}
                                className={'special-link'}
                            >
                                no site do ECOS da SBC
                            </a>
                        </li>
                    </ol>
                </CParagraph>
            </Box>
        </Grid>
    );
};
