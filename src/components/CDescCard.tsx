import React from 'react';
import { Grid, TypographyProps } from '@mui/material';

import { CParagraph } from './CParagraph';
import { CHeader } from './CHeader';

import '../shared/styles/desc-card.styles.css';

interface IDescCardProps {
    header: React.ReactNode;
    headerColor: string;
    borderColor: string;
    borderWidth?: number;
    children: React.ReactNode;
}

export const CDescCard: React.FC<IDescCardProps & TypographyProps> = ({
    header,
    headerColor,
    borderColor,
    borderWidth = 1,
    children,
    ...props
}) => {
    return (
        <Grid
            item
            flexGrow={1}
            display={'flex'}
            position={'relative'}
            justifyContent={'center'}
            flexDirection={'column'}
            bgcolor={'white'}
            borderColor={borderColor}
        >
            <CHeader
                alignItems={'end'}
                contrastText
                boxColor={headerColor}
                arrow={{
                    width: '15px',
                    height: '15px',
                    class: 'desc-header',
                    borderWidth
                }}
                p={1}
            >
                {header}
            </CHeader>

            <CParagraph
                pt={2}
                pb={4}
                px={4}
                lineHeight={1.25}
                component={'p'}
                className={'desc-text'}
                sx={{ borderWidth }}
                height={'100%'}
                {...props}
            >
                {children}
            </CParagraph>
        </Grid>
    );
};
