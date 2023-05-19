import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface ICHeaderProps {
    children: React.ReactNode;
    arrow?: {
        width: string;
        height: string;
        class?: string;
    };
    contrastText?: boolean;
    boxColor?: string;
}

export const CHeader: React.FC<ICHeaderProps & BoxProps> = ({
    children,
    arrow,
    contrastText,
    boxColor,
    ...props
}) => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            width={'100%'}
            sx={{ borderColor: 'inherit' }}
        >
            <Box
                p={4}
                display={'flex'}
                alignItems={'center'}
                width={'100%'}
                bgcolor={boxColor}
                justifyContent={'center'}
                color={`text${contrastText ? '.secondary' : '.primary'}`}
                {...props}
            >
                {children}
            </Box>
            {arrow && (
                <Box
                    className={arrow.class}
                    width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <div
                        style={{
                            width: 0,
                            height: 0,
                            border: `${arrow.width} solid transparent`,
                            borderTop: `${arrow.height} solid ${boxColor}`,
                            borderBottom: 0
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};
