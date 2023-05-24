import React from 'react';
import { CLogoBox } from '../../../shared/components';
import { Grid } from '@mui/material';
import { logos } from '../data/logos';

export const ProgramacaoTemplate = () => {
    return (
        <div id={'programacao'}>
            <Grid container direction={'row'}>
                <CLogoBox
                    logos={logos.slice(0, 2)}
                    borderColor={'primary.main'}
                    itemsPerRow={2}
                />
                <CLogoBox
                    logos={logos.slice(0, 3)}
                    borderColor={'primary.main'}
                    itemsPerRow={1}
                />
            </Grid>
        </div>
    );
};
