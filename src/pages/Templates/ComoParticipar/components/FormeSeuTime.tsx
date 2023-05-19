import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CParagraph, CTitle } from '../../../../shared/components';
import React from 'react';

export const FormeSeuTime = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
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
                    fontSize={mdDown ? '2rem' : '2.75rem'}
                    variant={'h3'}
                    fontWeight={700}
                    mb={0}
                >
                    Forme seu time!
                </CTitle>
            </Box>
            <Box width={'90%'} px={{ xs: 2, sm: 8 }}>
                <Typography
                    variant={mdDown ? 'body1' : 'h6'}
                    color={'primary.main'}
                    lineHeight={1.25}
                    mt={1}
                    mb={5}
                >
                    Cada time precisa de 1 coach,
                    <br />3 integrantes e poderá ter 1 reserva.
                </Typography>
                <CTitle
                    titleColor={'tertiary'}
                    variant={'h4'}
                    fontWeight={'bold'}
                >
                    Inscrições
                </CTitle>
                <CParagraph>
                    O representante do time (coach) deverá realizar as
                    inscrições até dia <b>??/??/2023</b>.<br />
                    Ele deverá:
                    <ol className={'custom-list'}>
                        <li>
                            preencher as informações dos times{' '}
                            <span
                                className={'como-participar-time'}
                                style={{
                                    borderBottomColor:
                                        theme.palette.tertiary.main
                                }}
                            >
                                <a
                                    href={'https://icpc.global/'}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    className={'como-participar-time'}
                                    style={{
                                        borderBottomColor:
                                            theme.palette.tertiary.main
                                    }}
                                >
                                    no site do ICPC
                                </a>
                            </span>
                        </li>
                        <li>
                            providenciar o pagamento da inscrição{' '}
                            <span
                                className={'como-participar-time'}
                                style={{
                                    borderBottomColor:
                                        theme.palette.tertiary.main
                                }}
                            >
                                <a
                                    href={
                                        'https://centraldesistemas.sbc.org.br/ecos/maratonasbc2022/'
                                    }
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                >
                                    no site do ECOS da SBC
                                </a>
                            </span>
                        </li>
                    </ol>
                </CParagraph>
            </Box>
        </Grid>
    );
};
