import React from 'react';
import { CParagraph, CTextSlice, CTitle } from '../../shared/components';
import { Box } from '@mui/material';

export const SobreMaratonaTemplate = () => {
    return (
        <div id={'sobre-a-maratona'}>
            <Box display={'flex'} flexDirection={'row'}>
                <CTextSlice
                    noShadow
                    bgcolor={'primary.main'}
                    width={'45%'}
                    pl={8}
                    pr={6}
                >
                    <CTitle
                        contrastText
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                    >
                        Sobre a maratona
                    </CTitle>
                    <CParagraph useContrastText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse ut posuere felis, at aliquam ante. Curabitur
                        id consectetur tellus. Suspendisse fringilla, quam
                        tincidunt condimentum lacinia, tortor massa aliquam est,
                        eget facilisis nisi velit sed massa.
                    </CParagraph>
                    <Box mt={3} height={200} width={'100%'}>
                        <iframe
                            title={'maratona'}
                            height={'100%'}
                            width={'100%'}
                            src="https://www.youtube.com/embed/gWo12TtN9Kk"
                        />
                    </Box>
                </CTextSlice>
                <CTextSlice noShadow width={'55%'} px={8}>
                    <CTitle
                        contrastText
                        variant={'h4'}
                        fontWeight={600}
                        titleColor={'tertiary'}
                    >
                        Sobre a maratona
                    </CTitle>
                    <CParagraph>
                        <b>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse ut posuere felis, at aliquam ante.
                        </b>{' '}
                        Curabitur id consectetur tellus. Suspendisse fringilla,
                        quam tincidunt condimentum lacinia, tortor massa aliquam
                        est, eget facilisis nisi velit sed massa.
                    </CParagraph>
                    <CTitle
                        titleColor={'tertiary'}
                        variant={'h4'}
                        fontWeight={600}
                        lineHeight={1}
                        mt={6}
                        mb={2}
                    >
                        Instituições organizadoras
                    </CTitle>
                </CTextSlice>
            </Box>
        </div>
    );
};
