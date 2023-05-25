import React from 'react';
import { Grid, TypographyProps } from '@mui/material';
import { CHeader, CParagraph } from './index';

import './desc-card.styles.css';

interface ICDescCardProps {
    header: React.ReactNode;
    headerColor: string;
    borderColor: string;
    borderWidth?: number;
    children: React.ReactNode;
}

export const CDescCard: React.FC<ICDescCardProps & TypographyProps> = ({
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
            sx={{ borderColor }}
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
