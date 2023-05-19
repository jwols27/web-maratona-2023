import React from 'react';
import { Box } from '@mui/material';
import {
    CImageSlice,
    CParagraph,
    CTitle,
    FadeInSection
} from '../../shared/components';

import teste2 from '../../shared/assets/teste_2.png';
import logoMaratona from '../../shared/assets/logos/logo-maratona.png';
import '../../shared/styles/thumbnail.css';

export const SobreFinalTemplate = () => {
    return (
        <div id={'sobre-a-final'}>
            <CImageSlice
                ratio={{ text: 55, image: 45 }}
                image={{
                    src: teste2,
                    alt: 'teste2'
                }}
                mainBoxProps={{
                    bgcolor: 'tertiary.main'
                }}
                textBoxProps={{
                    px: 8
                }}
            >
                <CTitle
                    variant={'h3'}
                    textTransform={'uppercase'}
                    fontWeight={950}
                    contrastText
                >
                    Sobre a final
                </CTitle>
                <CParagraph useContrastText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ut posuere felis, at aliquam ante. Curabitur id
                    consectetur tellus. Suspendisse fringilla, quam tincidunt
                    condimentum lacinia, tortor massa aliquam est, eget
                    facilisis nisi velit sed massa. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Suspendisse ut posuere felis,
                    at aliquam ante. Curabitur id consectetur tellus.
                    Suspendisse fringilla, quam tincidunt condimentum lacinia,
                    tortor massa aliquam est, eget facilisis nisi velit sed
                    massa.
                </CParagraph>
                <Box mt={3} height={350} width={'100%'}>
                    <iframe
                        title={'maratona'}
                        height={'100%'}
                        width={'100%'}
                        src="https://www.youtube.com/embed/gWo12TtN9Kk"
                    />
                </Box>
            </CImageSlice>

            <FadeInSection>
                <CImageSlice
                    reversed
                    ratio={{ text: 55, image: 45 }}
                    image={{
                        src: teste2,
                        alt: 'Logo da maratona'
                    }}
                    mainBoxProps={{
                        bgcolor: 'primary.main',
                        mb: 5
                    }}
                    textBoxProps={{
                        px: 8
                    }}
                >
                    <CTitle
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                        contrastText
                    >
                        Realização
                    </CTitle>
                    <CParagraph useContrastText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse ut posuere felis, at aliquam ante. Curabitur
                        id consectetur tellus. Suspendisse fringilla, quam
                        tincidunt condimentum lacinia, tortor massa aliquam est,
                        eget facilisis nisi velit sed massa.
                    </CParagraph>
                    <Box mt={3} height={400} width={'100%'}>
                        <iframe
                            title={'maratona'}
                            height={'100%'}
                            width={'100%'}
                            src="https://www.youtube.com/embed/VgDgWzBL7s4"
                        />
                    </Box>
                </CImageSlice>
            </FadeInSection>

            <FadeInSection>
                <CImageSlice
                    ratio={{ text: 60, image: 40 }}
                    image={{
                        src: logoMaratona,
                        alt: 'teste3',
                        label: {
                            text: (
                                <a
                                    href={'https://google.com'}
                                    target={'_blank'}
                                    rel="noreferrer"
                                    className={'thumbnail-link'}
                                >
                                    Mais sobre a UNOESC
                                </a>
                            )
                        },
                        thumbnail: {
                            enlarge: true,
                            width: '250px'
                        }
                    }}
                    textBoxProps={{
                        px: 8
                    }}
                >
                    <CTitle variant={'h5'} fontWeight={950}>
                        Sobre a UNOESC
                    </CTitle>
                    <CParagraph align={'justify'} color={'primary.main'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse ut posuere felis, at aliquam ante. Curabitur
                        id consectetur tellus. Suspendisse fringilla, quam
                        tincidunt condimentum lacinia, tortor massa aliquam est,
                        eget facilisis nisi velit sed massa. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse ut
                        posuere felis, at aliquam ante. Curabitur id consectetur
                        tellus. Suspendisse fringilla, quam tincidunt
                        condimentum lacinia, tortor massa aliquam est, eget
                        facilisis nisi velit sed massa. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Suspendisse ut
                        posuere felis, at aliquam ante. Curabitur id consectetur
                        tellus. Suspendisse fringilla, quam tincidunt
                        condimentum lacinia, tortor massa aliquam est, eget
                        facilisis nisi velit sed massa.
                    </CParagraph>
                </CImageSlice>
            </FadeInSection>

            <FadeInSection>
                <CImageSlice
                    reversed
                    ratio={{ text: 60, image: 40 }}
                    image={{
                        src: logoMaratona,
                        alt: 'teste3',
                        label: {
                            text: (
                                <a
                                    href={'https://google.com'}
                                    target={'_blank'}
                                    rel="noreferrer"
                                    className={'thumbnail-link'}
                                >
                                    Mais sobre a INSTITUIÇÃO
                                </a>
                            )
                        },
                        thumbnail: {
                            enlarge: true,
                            width: '250px'
                        }
                    }}
                    textBoxProps={{
                        px: 8
                    }}
                >
                    <CTitle variant={'h5'} fontWeight={950}>
                        Sobre a INSTITUIÇÃO
                    </CTitle>
                    <CParagraph align={'justify'} color={'primary.main'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse ut posuere felis, at aliquam ante. Curabitur
                        id consectetur tellus. Suspendisse fringilla, quam
                        tincidunt condimentum lacinia, tortor massa aliquam est,
                        eget facilisis nisi velit sed massa. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse ut
                        posuere felis, at aliquam ante. Curabitur id consectetur
                        tellus. Suspendisse fringilla, quam tincidunt
                        condimentum lacinia, tortor massa aliquam est, eget
                        facilisis nisi velit sed massa. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Suspendisse ut
                        posuere felis, at aliquam ante. Curabitur id consectetur
                        tellus. Suspendisse fringilla, quam tincidunt
                        condimentum lacinia, tortor massa aliquam est, eget
                        facilisis nisi velit sed massa.
                    </CParagraph>
                </CImageSlice>
            </FadeInSection>
        </div>
    );
};
