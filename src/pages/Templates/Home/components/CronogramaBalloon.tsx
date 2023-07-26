import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { CBalloon, TBalloon } from '../../../../components';

interface ICronogramaBalloonProps {
    balloon: TBalloon;
}

export const CronogramaBalloon: React.FC<ICronogramaBalloonProps> = ({
    balloon
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid
            item
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
            mt={{ xs: 6, md: 0 }}
            mb={{ xs: 2, md: 0 }}
        >
            <Box
                position={{ xs: 'initial', md: 'absolute' }}
                className={'desc-balloon'}
                sx={{
                    top: `calc(-${balloon.size * 1.33}px - ${balloon.offset})`
                }}
            >
                <CBalloon
                    size={balloon.size}
                    color={balloon.color}
                    arrow={!mdDown}
                >
                    {balloon.children}
                </CBalloon>
            </Box>
        </Grid>
    );
};
