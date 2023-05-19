import { Box, Grid, useTheme } from '@mui/material';
import { CParagraph, CTitle } from '../../../../shared/components';
import nerdRuivo from '../../../../shared/assets/nerd-ruivo.png';
import React from 'react';

export const QuemCoach = () => {
    const theme = useTheme();
    return (
        <Grid
            item
            xs={12}
            md={5.5}
            pb={4}
            display={'flex'}
            mt={{ xs: 4, md: 0 }}
            position={'relative'}
            minHeight={{ xs: '40rem', sm: '32rem', md: '38rem', lg: '32rem' }}
        >
            <Box
                width={{ xs: '65%', sm: '75%', md: '70%', lg: '80%' }}
                className={'bark-main'}
                left={{ xs: theme.spacing(2), sm: theme.spacing(8), md: 0 }}
            >
                <Box border={`2px solid ${theme.palette.tertiary.main}`} p={4}>
                    <CTitle
                        titleColor={'secondary'}
                        variant={'h4'}
                        fontWeight={'bold'}
                    >
                        Quem é o coach?
                    </CTitle>

                    <CParagraph
                        lineHeight={1.5}
                        className={'como-participar-time'}
                    >
                        Ele poderá ser docente do curso ou alguém indicado por
                        um docente para este fim. O coach será o único
                        interlocutor junto à organização do concurso. <br />
                        <br />
                        Confira as{' '}
                        <a
                            href={'https://maratona.sbc.org.br/sobre22.html'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            style={{
                                borderBottomColor: theme.palette.tertiary.main
                            }}
                        >
                            regras do concurso!
                        </a>
                    </CParagraph>
                </Box>
                <div className={'bark-arrow-pos'}>
                    <div className={'bark-arrow'} />
                </div>
            </Box>

            <Box
                component={'img'}
                src={nerdRuivo}
                alt={''}
                className={'bark-image'}
            />
        </Grid>
    );
};
