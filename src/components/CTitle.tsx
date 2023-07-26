import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface ITitleProps {
    titleColor?: 'primary' | 'secondary' | 'tertiary';
    contrastText?: boolean;
    children: React.ReactNode;
}

export const CTitle: React.FC<ITitleProps & TypographyProps> = ({
    titleColor = 'primary',
    contrastText,
    children,
    ...props
}) => {
    return (
        <Typography
            color={`${titleColor}${contrastText ? '.contrastText' : '.main'}`}
            lineHeight={1}
            mb={2}
            {...props}
        >
            {children}
        </Typography>
    );
};
