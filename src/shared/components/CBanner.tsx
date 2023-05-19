import React from 'react';
import { Box, Typography } from '@mui/material';

interface ICBannerProps {
    path: string;
    alt: string;
    height?: number;
    label?: string;
}

export const CBanner: React.FC<ICBannerProps> = ({
    path,
    alt,
    height,
    label
}) => {
    return (
        <Box lineHeight={0}>
            <img src={path} alt={alt} style={{ width: '100%', height }} />
            {label && (
                <Box
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                >
                    <Typography variant={'subtitle2'}>{label}</Typography>
                </Box>
            )}
        </Box>
    );
};
