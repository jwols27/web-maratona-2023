import React from 'react';
import { Grid, GridProps } from '@mui/material';

import '../styles/thumbnail.css';

export type TLogoBoxImage = {
    src: string;
    alt: string;
    href: string;
};

interface ICLogoBoxProps {
    logos: TLogoBoxImage[];
    itemsPerRow?: number;
    enlargeOnHover?: boolean;
}

export const CLogoBox: React.FC<ICLogoBoxProps & GridProps> = ({
    logos,
    itemsPerRow = 3,
    enlargeOnHover,
    ...props
}) => {
    return (
        <Grid
            item
            xs={12}
            container
            justifyContent={'center'}
            alignItems={'center'}
            py={{ sm: 2, md: 0, xl: 1, xxl: 2 }}
            px={{ sm: 4, md: 0, xl: 2, xxl: 4 }}
            border={2}
            borderColor={'transparent'}
            rowSpacing={itemsPerRow < logos.length ? 5 : undefined}
            {...props}
        >
            {logos.map((logo, index) => (
                <Grid
                    key={`logo-${index}`}
                    item
                    xs={12 / itemsPerRow}
                    display={'flex'}
                    justifyContent={'center'}
                    p={1}
                    className={enlargeOnHover ? 'thumbnail' : ''}
                >
                    <a href={logo.href} target={'_blank'} rel={'noreferrer'}>
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            style={{
                                objectFit: 'contain',
                                maxWidth: '100%'
                            }}
                        />
                    </a>
                </Grid>
            ))}
        </Grid>
    );
};
