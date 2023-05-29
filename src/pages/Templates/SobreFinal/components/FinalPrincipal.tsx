import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import {
    CImageSlice,
    CParagraph,
    CTitle,
    TCustomImageProps
} from '../../../../shared/components';

import bloons from '../../../../shared/assets/balloons.png';
import maratona2022 from '../../../../shared/assets/maratona2022.jpeg';
import logo from '../../../../shared/assets/logos/logo-maratona.png';

export const FinalPrincipal = () => {
    const theme = useTheme();
    const betweenMdLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const xlDown = useMediaQuery(theme.breakpoints.down('xl'));

    const imageList = React.useMemo((): TCustomImageProps[] => {
        const image1: TCustomImageProps = {
            src: maratona2022,
            alt: 'Maratona 2022',
            style: {
                width: '100%',
                height: xlDown ? '600px ' : '425px',
                objectFit: 'cover',
                filter: 'grayscale(100%)'
            }
        };
        const image2: TCustomImageProps = {
            src: logo,
            alt: 'Logo da maratona',
            style: {
                maxWidth: '100%',
                height: '150px',
                marginBottom: '24px'
            }
        };
        return [image1, image2];
    }, [xlDown]);

    return (
        <CImageSlice
            ratio={{ text: 55, image: 45 }}
            images={imageList}
            mainBoxProps={{
                bgcolor: 'tertiary.main'
            }}
            textBoxProps={{
                px: { xs: 2, md: 8 }
            }}
        >
            <Box display={'flex'} flexDirection={'row'} pb={4}>
                <Box display={'flex'} flexDirection={'column'} mr={2}>
                    <CTitle
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                        contrastText
                    >
                        Sobre a final
                    </CTitle>
                    <CParagraph contrastText fontWeight={600} mb={4}>
                        <CParagraph
                            component={'span'}
                            color={'primary.main'}
                            fontWeight={'inherit'}
                        >
                            A final da XXVIII Maratona de Programação ocorrerá
                            nos dias 19 a 22 de Outubro de 2023, e contará com
                            os times classificados nas várias sedes na primeira
                            fase.
                        </CParagraph>
                        <br />A chegada se dá na quinta-feira. Na sexta-feira
                        ocorrem a abertura, a sessão de aquecimento e outros
                        eventos importantes. No sábado ocorre a competição e a
                        festa de encerramento do concurso. A organização do
                        concurso oferecerá auxílio para os times de fora da sede
                        para hospedagem durante as finais.
                    </CParagraph>
                    <CTitle variant={'h4'} fontWeight={600} contrastText>
                        Realização
                    </CTitle>
                    <CParagraph contrastText fontWeight={600}>
                        A final brasileira da XXVIII Maratona de Programação
                        será realizada em Chapecó -SC, pela Universidade do
                        Oeste de Santa Catarina (UNOESC). O diretor da final é o
                        Prof. Tiago Zonta.
                    </CParagraph>
                </Box>
                {!betweenMdLg && (
                    <img
                        src={bloons}
                        alt={''}
                        style={{
                            height: '100%',
                            maxWidth: '150px',
                            objectFit: 'contain'
                        }}
                    />
                )}
            </Box>
        </CImageSlice>
    );
};
