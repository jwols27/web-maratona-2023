import React from 'react';
import { Grid, GridProps, useMediaQuery, useTheme } from '@mui/material';

import { CBalloon, TBalloon } from '../../../../components';

interface IAcomTurBalloonProps {
    balloon: TBalloon;
}

export const AcomTurBalloon: React.FC<IAcomTurBalloonProps & GridProps> = ({
    balloon,
    ...props
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid item mb={balloon.offset} {...props}>
            <CBalloon size={balloon.size} color={balloon.color} arrow={!mdDown}>
                {balloon.children}
            </CBalloon>
        </Grid>
    );
};
