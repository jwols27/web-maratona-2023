import React from 'react';
import { CLogoBox, TLogoBoxImage } from '../../../shared/components';
import { Grid } from '@mui/material';
import logoSBC from '../../../shared/assets/logos/logo-sbc.png';
import logo45 from '../../../shared/assets/logos/logo-sbc45.png';

const logos: TLogoBoxImage[] = [
    {
        src: logoSBC,
        alt: 'Logo SBC'
    },
    {
        src: logo45,
        alt: 'Logo SBC 45 anos'
    },
    {
        src: logoSBC,
        alt: 'Logo SBC'
    },
    {
        src: logo45,
        alt: 'Logo SBC 45 anos'
    },
    {
        src: logoSBC,
        alt: 'Logo SBC'
    },
    {
        src: logo45,
        alt: 'Logo SBC 45 anos'
    }
];

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
