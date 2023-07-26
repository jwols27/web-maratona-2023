import React from 'react';
import { Grid } from '@mui/material';

import { CHeader, CTitle } from '../../../components';
import { FormeSeuTime, QuemCoach } from './components';

import '../../../shared/styles/bark-box.css';

export const ComoParticiparTemplate = () => {
    return (
        <div id={'como-participar'}>
            <CHeader
                contrastText
                boxColor={'tertiary.main'}
                arrow={{ width: '40px', height: '60px' }}
            >
                <CTitle
                    variant={'h3'}
                    textTransform={'uppercase'}
                    fontWeight={950}
                    mb={0}
                    contrastText
                >
                    Como participar
                </CTitle>
            </CHeader>
            <Grid container py={2} display={'flex'} flexDirection={'row'}>
                <FormeSeuTime />
                <Grid item xs={0} md={1} />
                <QuemCoach />
            </Grid>
        </div>
    );
};
