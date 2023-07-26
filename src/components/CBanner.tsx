import React, { RefObject } from 'react';
import { Box, Typography } from '@mui/material';

interface IBannerProps {
    label?: string;
    ref?: RefObject<HTMLElement>;
}

export const CBanner: React.FC<
    IBannerProps & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ label, ref, ...props }) => {
    return (
        <Box lineHeight={0} ref={ref}>
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
