import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { CHeader } from '../../../shared/components';

import '../../../shared/styles/bark-box.css';
import './como-participar.css';
import { FormeSeuTime, QuemCoach } from './components';

export const ComoParticiparTemplate = () => {
    const theme = useTheme();
    return (
        <div id={'como-participar'}>
            <CHeader
                contrastText
                boxColor={theme.palette.tertiary.main}
                arrow={{ width: '40px', height: '60px' }}
            >
                <Typography
                    variant={'h3'}
                    textTransform={'uppercase'}
                    fontWeight={950}
                >
                    Como participar
                </Typography>
            </CHeader>
            <Grid container py={2} display={'flex'} flexDirection={'row'}>
                <FormeSeuTime />
                <Grid item xs={0} md={1} />
                <QuemCoach />
            </Grid>
        </div>
    );
};
