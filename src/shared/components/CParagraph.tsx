import React from 'react';
import {
    Typography,
    TypographyProps,
    useMediaQuery,
    useTheme
} from '@mui/material';

interface ICParagraphProps {
    useContrastText?: boolean;
    children: React.ReactNode;
    component?: React.ElementType;
}

export const CParagraph: React.FC<ICParagraphProps & TypographyProps> = ({
    useContrastText,
    component = 'span',
    children,
    ...props
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Typography
            color={`text${useContrastText ? '.secondary' : '.primary'}`}
            variant={mdDown ? 'body2' : 'body1'}
            style={{ wordWrap: 'break-word' }}
            width={'100%'}
            lineHeight={1.75}
            component={component}
            {...props}
        >
            {children}
        </Typography>
    );
};
