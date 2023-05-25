import { Box, Grid } from '@mui/material';
import { CParagraph, CTitle } from '../../../../shared/components';
import nerdRuivo from '../../../../shared/assets/nerd-ruivo.png';
import React from 'react';

export const QuemCoach = () => {
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
                left={{ xs: 2, sm: 8, md: 0 }}
            >
                <Box border={2} borderColor={'tertiary.main'} p={4}>
                    <CTitle
                        titleColor={'secondary'}
                        variant={'h4'}
                        fontWeight={'bold'}
                    >
                        Quem é o coach?
                    </CTitle>

                    <CParagraph
                        lineHeight={1.5}
                        className={'special-link'}
                        borderColor={'tertiary.main'}
                        fontWeight={600}
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
