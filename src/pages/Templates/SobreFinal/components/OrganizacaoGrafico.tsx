import React from 'react';
import { Grid, GridProps, useMediaQuery, useTheme } from '@mui/material';
import { CBalloon, TLogoBoxImage } from '../../../../shared/components';

import '../organizacao.styles.css';
import '../../../../shared/styles/thumbnail.css';

import { logos } from '../../data/logos';
import logo from '../../../../shared/assets/logos/logo-unoesc-branca.png';

interface IOrganizacaoProps {
    orgHorizontal?: 'left' | 'right';
    orgVertical?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    boxDistance: number;
    logo: TLogoBoxImage;
    orgHeight: number;
    lineWidth?: number;
}

const OrganizacaoBox: React.FC<IOrganizacaoProps & GridProps> = ({
    orgHorizontal = 'left',
    orgVertical = 'column',
    lineWidth = 0,
    boxDistance,
    orgHeight,
    logo,
    ...props
}) => {
    return (
        <Grid
            container
            borderColor={'inherit'}
            direction={orgVertical}
            alignItems={'center'}
            height={boxDistance}
            width={boxDistance + 100}
            position={'absolute'}
            {...props}
        >
            <Grid
                item
                className={'box-line'}
                width={lineWidth + 2}
                height={0}
                mr={`${orgHorizontal === 'left' ? '-' : ''}${lineWidth}px`}
            />
            <Grid
                item
                className={'box-line'}
                width={0}
                height={`calc(100% - ${orgHeight}px - 2px)`}
            />
            <Grid item className={'thumbnail'} borderColor={'inherit'}>
                <a
                    href={logo.href}
                    className={'box-org'}
                    target={'_blank'}
                    rel={'noreferrer'}
                    style={{
                        height: orgHeight
                    }}
                >
                    <img src={logo.src} alt={logo.alt} />
                </a>
            </Grid>
        </Grid>
    );
};

export const OrganizacaoGrafico = () => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <CBalloon size={125} color={theme.palette.secondary.main}>
                <div className={'balloon thumbnail'}>
                    <a
                        href={'https://www.unoesc.edu.br/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        className={'balloon'}
                    >
                        <img
                            src={logo}
                            alt={'Logo UNOESC'}
                            style={{
                                margin: 'auto',
                                width: '75%'
                            }}
                        />
                    </a>
                </div>
            </CBalloon>

            <OrganizacaoBox //acic
                orgVertical={'column-reverse'}
                boxDistance={200}
                orgHeight={90}
                logo={logos[4]}
                mb={25}
            />
            <OrganizacaoBox //deatec
                orgVertical={'column-reverse'}
                boxDistance={smDown ? 120 : 90}
                logo={logos[5]}
                orgHeight={65}
                lineWidth={160}
                mb={smDown ? 15 : 10}
                mr={smDown ? 32 : 45}
            />

            <Grid //pollen
                container
                borderColor={'inherit'}
                direction={'row'}
                alignItems={'center'}
                height={190}
                width={smDown ? 150 : 240}
                position={'absolute'}
                mt={5}
                ml={smDown ? 32 : 40}
            >
                <Grid
                    item
                    className={'box-line'}
                    height={0}
                    width={smDown ? 30 : 80}
                />

                <Grid item className={'thumbnail'} borderColor={'inherit'}>
                    <a
                        href={logos[6].href}
                        className={'box-org'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        style={{
                            height: smDown ? 55 : 60
                        }}
                    >
                        <img src={logos[6].src} alt={logos[6].alt} />
                    </a>
                </Grid>
            </Grid>

            <Grid //prefeitura
                container
                borderColor={'inherit'}
                direction={'row'}
                alignItems={'center'}
                height={190}
                width={smDown ? 200 : 310}
                position={'absolute'}
                mt={30}
                ml={smDown ? 20 : 35}
            >
                <Grid
                    item
                    className={'box-line'}
                    height={`calc(100% - ${80}px + 2px)`}
                    width={0}
                    mb={`110px`}
                />
                <Grid item className={'box-line'} height={0} width={40} />

                <Grid item className={'thumbnail'} borderColor={'inherit'}>
                    <a
                        href={logos[7].href}
                        className={'box-org'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        style={{
                            height: smDown ? 70 : 80
                        }}
                    >
                        <img src={logos[7].src} alt={logos[7].alt} />
                    </a>
                </Grid>
            </Grid>

            <OrganizacaoBox //uffs
                boxDistance={125}
                lineWidth={160}
                orgHeight={75}
                logo={logos[8]}
                mt={25}
                mr={smDown ? 30 : 40}
            />
            <OrganizacaoBox //uno
                orgVertical={'column-reverse'}
                orgHorizontal={'right'}
                boxDistance={125}
                lineWidth={160}
                orgHeight={80}
                logo={logos[9]}
                mb={25}
                ml={smDown ? 22 : 32}
            />
        </>
    );
};
