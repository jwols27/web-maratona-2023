import React from 'react';
import { Grid, Typography } from '@mui/material';

interface ICronogramaHeaderProps {
    date: React.ReactNode;
    weekDay: React.ReactNode;
}

export const CronogramaHeader: React.FC<ICronogramaHeaderProps> = ({
    date,
    weekDay
}) => {
    return (
        <Grid
            container
            direction={{ xs: 'column', md: 'row' }}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Grid item>
                <Typography
                    variant={'h4'}
                    fontWeight={700}
                    mr={{ xs: 0, md: 1 }}
                >
                    {date}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={'h6'} fontWeight={700} align={'center'}>
                    {weekDay}
                </Typography>
            </Grid>
        </Grid>
    );
};
