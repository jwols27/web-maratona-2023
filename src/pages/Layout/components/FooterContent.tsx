import React from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import { CSocials } from '../../../shared/components';

import footerIcpc from '../../../shared/assets/footer-icpc.png';
import logo45 from '../../../shared/assets/logos/logo-sbc45.png';
import logoSBC from '../../../shared/assets/logos/logo-sbc.png';

export const FooterContent = () => {
    const theme = useTheme();
    return (
        <>
            <Grid
                container
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                bgcolor={'primary.main'}
                px={{ xs: 4, lg: 8, xl: 16, xxl: 24 }}
                py={5}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant={'h5'}
                        fontWeight={700}
                        color={'tertiary.main'}
                        lineHeight={2.25}
                    >
                        Contato
                    </Typography>
                    <Typography
                        variant={'body2'}
                        fontWeight={400}
                        color={'text.secondary'}
                        lineHeight={1.75}
                        letterSpacing={1.25}
                    >
                        E-mail: aaaaaaaaaa
                        <br />
                        E-mail: aaaaaaaaaa
                        <br />
                        Telefone: (49) 0 0000-0000
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography
                        variant={'h5'}
                        fontWeight={700}
                        color={'tertiary.main'}
                        lineHeight={2.25}
                    >
                        Localização
                    </Typography>
                    <Typography
                        variant={'body2'}
                        fontWeight={400}
                        color={'text.secondary'}
                        lineHeight={1.75}
                        letterSpacing={1.25}
                    >
                        Endereço: Av. Nereu Ramos, 3777D - Seminário, Chapecó
                        -SC, 89813-000
                        <br />
                        Telefone: (49) 3319-2600
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    mt={4}
                    container
                    justifyContent={'center'}
                >
                    <CSocials
                        color={theme.palette.text.secondary}
                        spaceInBetween={8}
                        showFacebook
                        showInstagram
                        showWhatsapp
                        showYoutube
                    />
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent={'start'}
                alignItems={'center'}
                direction={'row'}
                //width={'100%'}
                px={{ xs: 4, lg: 8, xl: 16, xxl: 24 }}
                py={1}
                spacing={2}
            >
                <Grid item xs={12} width={'100%'}>
                    <Typography
                        variant={'h6'}
                        fontWeight={700}
                        color={'tertiary.main'}
                    >
                        Realização:
                    </Typography>
                </Grid>
                <Grid
                    item
                    component={'img'}
                    src={logoSBC}
                    alt={'SBC'}
                    height={{ xs: 80, sm: 125 }}
                    sx={{ objectFit: 'contain' }}
                />
                <Grid
                    item
                    component={'img'}
                    src={logo45}
                    alt={'SBC 45 anos'}
                    height={{ xs: 50, sm: 80 }}
                    sx={{ objectFit: 'contain' }}
                ></Grid>
                <Grid item xs={0} md={1} />
                <Grid
                    item
                    component={'img'}
                    xs={12}
                    md={8}
                    py={2}
                    width={'100%'}
                    src={footerIcpc}
                    alt={'ICPC'}
                    sx={{ objectFit: 'contain' }}
                ></Grid>
            </Grid>
        </>
    );
};
