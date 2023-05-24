import React from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';

import {
    CHeader,
    CLogoBox,
    CTitle,
    FadeInSection
} from '../../../shared/components';
import { logos } from '../data/logos';

export const PatrocinadoresTemplate = () => {
    return (
        <Box>
            {/*<FadeInSection>*/}
            {/*    <Box mb={4} minHeight={'35vh'} width={'100%'}>*/}
            {/*        <CHeader contrastText boxColor={'deepskyblue'}>*/}
            {/*            <Typography*/}
            {/*                variant={'h3'}*/}
            {/*                textTransform={'uppercase'}*/}
            {/*                fontWeight={950}*/}
            {/*            >*/}
            {/*                Diamante*/}
            {/*            </Typography>*/}
            {/*        </CHeader>*/}
            {/*        <Box p={4}>*/}
            {/*            <CLogoBox*/}
            {/*                logos={logos.slice(0, 4)}*/}
            {/*                itemsPerRow={4}*/}
            {/*                enlargeOnHover*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</FadeInSection>*/}

            {/*<FadeInSection>*/}
            {/*    <Box mb={4} minHeight={'35vh'} width={'100%'}>*/}
            {/*        <CHeader contrastText boxColor={'gold'}>*/}
            {/*            <Typography*/}
            {/*                variant={'h3'}*/}
            {/*                textTransform={'uppercase'}*/}
            {/*                fontWeight={950}*/}
            {/*            >*/}
            {/*                Ouro*/}
            {/*            </Typography>*/}
            {/*        </CHeader>*/}
            {/*        <Box p={4}>*/}
            {/*            <CLogoBox*/}
            {/*                logos={logos.slice(4, 7)}*/}
            {/*                itemsPerRow={3}*/}
            {/*                enlargeOnHover*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</FadeInSection>*/}

            {/*<FadeInSection>*/}
            {/*    <Box mb={4} minHeight={'35vh'} width={'100%'}>*/}
            {/*        <CHeader contrastText boxColor={'silver'}>*/}
            {/*            <Typography*/}
            {/*                variant={'h3'}*/}
            {/*                textTransform={'uppercase'}*/}
            {/*                fontWeight={950}*/}
            {/*            >*/}
            {/*                Prata*/}
            {/*            </Typography>*/}
            {/*        </CHeader>*/}
            {/*        <Box p={4}>*/}
            {/*            <CLogoBox*/}
            {/*                logos={logos.slice(7, 8)}*/}
            {/*                itemsPerRow={1}*/}
            {/*                enlargeOnHover*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</FadeInSection>*/}

            {/*<FadeInSection>*/}
            {/*    <Box mb={4} minHeight={'35vh'} width={'100%'}>*/}
            {/*        <CHeader contrastText boxColor={'chocolate'}>*/}
            {/*            <Typography*/}
            {/*                variant={'h3'}*/}
            {/*                textTransform={'uppercase'}*/}
            {/*                fontWeight={950}*/}
            {/*            >*/}
            {/*                Bronze*/}
            {/*            </Typography>*/}
            {/*        </CHeader>*/}
            {/*        <Box p={4}>*/}
            {/*            <CLogoBox*/}
            {/*                logos={logos.slice(8, 10)}*/}
            {/*                itemsPerRow={2}*/}
            {/*                enlargeOnHover*/}
            {/*            />*/}
            {/*        </Box>*/}
            {/*    </Box>*/}
            {/*</FadeInSection>*/}

            <FadeInSection>
                <Box bgcolor={'tertiary.main'} p={4} mb={2} width={'100%'}>
                    <Box display={'flex'} flexDirection={'row'}>
                        <CTitle
                            variant={'h5'}
                            fontWeight={600}
                            width={'50%'}
                            align={'center'}
                            color={'primary.main'}
                        >
                            Realização
                        </CTitle>
                        <CTitle
                            variant={'h5'}
                            fontWeight={600}
                            width={'50%'}
                            align={'center'}
                            color={'primary.main'}
                        >
                            Organização
                        </CTitle>
                    </Box>
                    <Grid container justifyContent={'center'}>
                        <CLogoBox
                            xs={5.9}
                            logos={logos.slice(0, 2)}
                            itemsPerRow={2}
                            enlargeOnHover
                        />
                        <Divider flexItem orientation={'vertical'} />
                        <CLogoBox
                            xs={5.9}
                            logos={logos.slice(2, 4)}
                            itemsPerRow={2}
                            enlargeOnHover
                        />
                    </Grid>
                </Box>
            </FadeInSection>
            <FadeInSection>
                <Box mb={4} minHeight={'35vh'} width={'100%'}>
                    <CHeader contrastText boxColor={'secondary.main'}>
                        <Typography
                            variant={'h3'}
                            textTransform={'uppercase'}
                            fontWeight={950}
                        >
                            Apoio
                        </Typography>
                    </CHeader>
                    <Box p={4}>
                        <CLogoBox
                            logos={logos.slice(7, 9)}
                            itemsPerRow={2}
                            enlargeOnHover
                        />
                    </Box>
                </Box>
            </FadeInSection>
        </Box>
    );
};
