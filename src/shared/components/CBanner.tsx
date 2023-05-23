import React from 'react';
import { Box, Typography } from '@mui/material';

interface ICBannerProps {
    height?: number | string;
    label?: string;
}

export const CBanner: React.FC<
    ICBannerProps & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ label, ...props }) => {
    return (
        <Box lineHeight={0}>
            <img src={props.src} alt={props.alt} width={'100%'} {...props} />
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
