import React from 'react';
import { Grid, useTheme } from '@mui/material';

import { CTitle, FadeInSection } from '../../../shared/components';
import { CronogramaResumido } from './components';
import { FinalPrincipal } from '../SobreFinal/components/FinalPrincipal';

import './cronograma.css';
import { SobreMaratona } from '../SobreMaratona/SobreMaratona';

export const HomeTemplate = () => {
    const theme = useTheme();
    return (
        <div id={'home'}>
            <FadeInSection>
                <SobreMaratona />
            </FadeInSection>

            <FadeInSection>
                <Grid
                    container
                    mt={8}
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
                    <Grid item xs={1} md={1.5} sx={{ borderColor: 'inherit' }}>
                        <div className={'programacao-box'} />
                        <div className={'programacao-box prog-1'} />
                    </Grid>
                    <Grid item xs={1} md={1.5} sx={{ borderColor: 'inherit' }}>
                        <div className={'programacao-box'} />
                        <div className={'programacao-box prog-2'} />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        md={6}
                        className={'prog-main'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        p={{ xs: 2, sm: 4 }}
                    >
                        <CTitle
                            textTransform={'uppercase'}
                            variant={'h3'}
                            fontWeight={950}
                            titleColor={'primary'}
                            mb={0}
                        >
                            Programação
                        </CTitle>
                    </Grid>
                    <Grid item xs={1} md={1.5} sx={{ borderColor: 'inherit' }}>
                        <div
                            className={'programacao-box prog-1'}
                            style={{ borderColor: theme.palette.tertiary.main }}
                        />
                        <div className={'programacao-box'} />
                    </Grid>
                    <Grid item xs={1} md={1.5} sx={{ borderColor: 'inherit' }}>
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
