import React from 'react';
import { Box, BoxProps, Paper } from '@mui/material';

interface ITextSliceProps {
    noShadow?: boolean;
    children: React.ReactNode;
}

export const CTextSlice: React.FC<ITextSliceProps & BoxProps> = ({
    noShadow,
    children,
    ...props
}) => {
    return (
        <Box
            component={Paper}
            borderRadius={0}
            boxShadow={noShadow ? 0 : undefined}
            display={'flex'}
            flexDirection={'column'}
            py={6}
            px={4}
            {...props}
        >
            {children}
        </Box>
    );
};
