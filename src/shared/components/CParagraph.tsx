import React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface ICParagraphProps {
    contrastText?: boolean;
    children: React.ReactNode;
    component?: React.ElementType;
}

export const CParagraph: React.FC<ICParagraphProps & TypographyProps> = ({
    contrastText,
    component = 'span',
    children,
    ...props
}) => {
    return (
        <Typography
            color={`text${contrastText ? '.secondary' : '.primary'}`}
            variant={'body1'}
            style={{ wordWrap: 'break-word' }}
            //width={'100%'}
            lineHeight={1.75}
            component={component}
            {...props}
        >
            {children}
        </Typography>
    );
};
