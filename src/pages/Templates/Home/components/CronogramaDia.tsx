import React from 'react';
import {
    Box,
    Grid,
    Typography,
    TypographyProps,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    CBalloon,
    CHeader,
    CParagraph,
    TBalloon
} from '../../../../shared/components';

interface ICronogramaDiaProps {
    balloon?: TBalloon;
    header: {
        date: string;
        weekDay: string;
    };
    headerColor: string;
    borderColor: string;
    xs?: number;
    children: React.ReactNode;
}

export const CronogramaDia: React.FC<ICronogramaDiaProps & TypographyProps> = ({
    balloon,
    header,
    headerColor,
    borderColor,
    xs = 3,
    children,
    ...props
}) => {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Grid
            item
            container
            xs={xs}
            position={'relative'}
            justifyContent={mdDown ? 'center' : 'initial'}
            direction={mdDown ? 'row' : 'column'}
        >
            {balloon && (
                <Grid item xs={0} mb={2} mt={4}>
                    <Box
                        className={'cronograma-balloon'}
                        sx={{
                            top: `calc(-${balloon.size * 1.33}px - ${
                                balloon.offset
                            })`,
                            position: mdDown ? 'initial' : 'absolute'
                        }}
                    >
                        <CBalloon
                            size={balloon.size}
                            color={balloon.color}
                            arrow={!mdDown}
                        >
                            {balloon.children}
                        </CBalloon>
                    </Box>
                </Grid>
            )}
            <Grid
                item
                xs={12}
                display={'flex'}
                flexDirection={'column'}
                sx={{ borderColor: borderColor }}
                bgcolor={'text.secondary'}
            >
                <CHeader
                    alignItems={'end'}
                    contrastText
                    boxColor={headerColor}
                    arrow={{
                        width: '15px',
                        height: '15px',
                        class: 'cronograma-header'
                    }}
                    sx={{ borderColor: 'inherit' }}
                    p={1}
                >
                    <Grid
                        container
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Grid item>
                            <Typography
                                variant={'h4'}
                                fontWeight={700}
                                mr={{ xs: 0, md: 1 }}
                            >
                                {header.date}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant={'h6'}
                                fontWeight={700}
                                align={'center'}
                            >
                                {header.weekDay}
                            </Typography>
                        </Grid>
                    </Grid>
                </CHeader>
                <CParagraph
                    pt={2}
                    pb={4}
                    px={4}
                    lineHeight={1.25}
                    component={'p'}
                    className={'cronograma-text'}
                    height={'100%'}
                    {...props}
                >
                    {children}
                </CParagraph>
            </Grid>
        </Grid>
    );
};
