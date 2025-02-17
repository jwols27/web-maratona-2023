import React from 'react';
import {
    Box,
    Divider,
    Grid,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';

import { CHeader, CLogoBox, CTitle, FadeInSection } from '../../../components';
import { realizacao, organizacao, patrocinadores } from '../../../data';

interface IPatrocinadoresRowProps {
    title: string;
    titleColor: string;
    children: React.ReactNode;
}

const PatrocinadoresRow: React.FC<IPatrocinadoresRowProps> = ({
    title,
    titleColor,
    children
}) => {
    return (
        <FadeInSection>
            <Box mb={8} width={'100%'}>
                <CHeader contrastText boxColor={titleColor}>
                    <Typography
                        variant={'h3'}
                        textTransform={'uppercase'}
                        fontWeight={950}
                    >
                        {title}
                    </Typography>
                </CHeader>
                <Box p={4}>{children}</Box>
            </Box>
        </FadeInSection>
    );
};

export const PatrocinadoresTemplate = () => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box>
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
                            logos={realizacao}
                            itemsPerRow={2}
                            enlargeOnHover
                        />
                        <Divider flexItem orientation={'vertical'} />
                        <CLogoBox
                            xs={5.9}
                            logos={organizacao}
                            itemsPerRow={2}
                            enlargeOnHover
                        />
                    </Grid>
                </Box>
            </FadeInSection>

            <PatrocinadoresRow title={'Diamante'} titleColor={'cornflowerblue'}>
                <CLogoBox
                    logos={patrocinadores.diamante}
                    itemsPerRow={mdDown ? 2 : 4}
                    enlargeOnHover
                    imageMaxWidth={250}
                    rowGap={1}
                    columnGap={8}
                />
            </PatrocinadoresRow>

            <PatrocinadoresRow title={'Prata'} titleColor={'slategray'}>
                <CLogoBox
                    logos={patrocinadores.prata}
                    itemsPerRow={mdDown ? 2 : 4}
                    enlargeOnHover
                    imageMaxWidth={250}
                    rowGap={4}
                    columnGap={8}
                />
            </PatrocinadoresRow>

            <PatrocinadoresRow title={'Apoio'} titleColor={'secondary.main'}>
                <CLogoBox
                    logos={patrocinadores.apoio}
                    itemsPerRow={mdDown ? 2 : 3}
                    enlargeOnHover
                />
            </PatrocinadoresRow>

            <PatrocinadoresRow
                title={'Apoio Institucional'}
                titleColor={'secondary.dark'}
            >
                <CLogoBox
                    logos={patrocinadores.apoioInstitucional}
                    itemsPerRow={1}
                    enlargeOnHover
                    imageMaxWidth={450}
                />
            </PatrocinadoresRow>
        </Box>
    );
};
