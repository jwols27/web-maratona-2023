import React from 'react';
import { CBalloon } from '../../../../shared/components';

import logo from '../../../../shared/assets/logos/logo-unoesc-branca.png';
import '../organizacao.styles.css';
import '../../../../shared/styles/thumbnail.css';
import { Grid, GridProps, useMediaQuery, useTheme } from '@mui/material';
import { logos } from '../../data/logos';

interface IOrganizacaoProps {
    orgHorizontal?: 'left' | 'right';
    orgVertical?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
    boxDistance: number;
    src: string;
    alt: string;
    orgHeight: number;
    lineWidth?: number;
}

const OrganizacaoBox: React.FC<IOrganizacaoProps & GridProps> = ({
    orgHorizontal = 'left',
    orgVertical = 'column',
    lineWidth = 0,
    boxDistance,
    orgHeight,
    src,
    alt,
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
            <Grid item className={'box-org'} height={orgHeight}>
                <img src={src} alt={alt} className={'thumbnail'} />
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
                <img
                    src={logo}
                    alt={'Logo UNOESC'}
                    className={'thumbnail'}
                    style={{
                        margin: 'auto',
                        width: '75%'
                    }}
                />
            </CBalloon>

            <OrganizacaoBox //acic
                orgVertical={'column-reverse'}
                boxDistance={200}
                orgHeight={90}
                src={logos[4].src}
                alt={logos[4].alt}
                mb={25}
            />
            <OrganizacaoBox //deatec
                orgVertical={'column-reverse'}
                boxDistance={smDown ? 120 : 90}
                src={logos[5].src}
                alt={logos[5].alt}
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
                <Grid item className={'box-org'} height={smDown ? 55 : 60}>
                    <img
                        src={logos[6].src}
                        alt={logos[6].alt}
                        className={'thumbnail'}
                    />
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
                <Grid item className={'box-org'} height={smDown ? 70 : 80}>
                    <img
                        src={logos[7].src}
                        alt={logos[7].alt}
                        className={'thumbnail'}
                    />
                </Grid>
            </Grid>

            <OrganizacaoBox //uffs
                boxDistance={125}
                lineWidth={160}
                orgHeight={75}
                src={logos[8].src}
                alt={logos[8].alt}
                mt={25}
                mr={smDown ? 30 : 40}
            />
            <OrganizacaoBox //uno
                orgVertical={'column-reverse'}
                orgHorizontal={'right'}
                boxDistance={125}
                lineWidth={160}
                orgHeight={80}
                src={logos[9].src}
                alt={logos[9].alt}
                mb={25}
                ml={smDown ? 22 : 32}
            />
        </>
    );
};
