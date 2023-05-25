import React from 'react';
import { Grid } from '@mui/material';

interface IMushroomLineProps {
    responsiveness: number;
    src: string;
    height?: number;
}

export const MushroomLine: React.FC<IMushroomLineProps> = ({
    responsiveness,
    src,
    height = 40
}) => {
    const cogumelos = React.useMemo((): React.ReactNode => {
        let lista: React.ReactNode[] = [];

        for (let i = 0; i < responsiveness; i++) {
            lista.push(
                <Grid item height={height}>
                    <img src={src} alt={''} />
                </Grid>
            );
        }
        return lista;
    }, [responsiveness, height, src]);

    return <>{cogumelos}</>;
};
