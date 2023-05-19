import React from 'react';
import { Grid } from '@mui/material';

import '../styles/thumbnail.css';

export type TLogoBoxImage = {
    src: string;
    alt: string;
};

interface ICLogoBoxProps {
    logos: TLogoBoxImage[];
    itemsPerRow?: number;
    borderColor?: string;
    borderWidth?: number;
    enlargeOnHover?: boolean;
    xs?: number;
}

export const CLogoBox: React.FC<ICLogoBoxProps> = ({
    logos,
    itemsPerRow = 3,
    borderColor = 'transparent',
    borderWidth = 2,
    enlargeOnHover,
    xs = 12
}) => {
    return (
        <Grid
            item
            xs={xs}
            container
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            py={{ sm: 2, md: 0, xl: 1, xxl: 2 }}
            px={{ sm: 4, md: 0, xl: 2, xxl: 4 }}
            border={borderWidth}
            borderColor={borderColor}
        >
            {logos.map((logo, index) => (
                <Grid
                    key={`logo-${index}`}
                    item
                    xs={12 / itemsPerRow}
                    display={'flex'}
                    justifyContent={'center'}
                    p={1}
                >
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        className={enlargeOnHover ? 'thumbnail' : ''}
                        style={{
                            objectFit: 'contain',
                            maxWidth: '100%'
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
